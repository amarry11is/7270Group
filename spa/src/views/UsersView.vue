<script setup>
import { onMounted, ref, computed } from "vue";
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'vue-router';

const router = useRouter();
const users = ref([]);
const name = ref("");

const searchQuery = ref("");

const filteredUsers = computed(() => {
    return users.value.filter(user => {
        return user.first_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
               user.last_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
               user.email.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
});

const loadAsyncData = async () => {
    try {
        // Get the token from local storage    
        const token = localStorage.getItem('token');
        // decode jwt token
        const decoded = jwtDecode(token);
        console.log(decoded);
        name.value = `${decoded.first_name} ${decoded.last_name}`;

        // Send a request to the endpoint with the token in the Authorization header
        var response = await fetch("/api/users/with/surveys", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // convert the response to json
        const json = await response.json();
        // log the json
        console.log(json);
        // set the data
        users.value = json;
    } catch (error) {
        console.log(error);
    }
};

const logout = function () {
    localStorage.removeItem('token');
    location.reload()
}

/*
 * Handle modify button click event
 */
 const handleModifyBtnClick = async (user_id) => {
    localStorage.setItem('user-id', user_id);
    router.push({ name: 'user-update', params: { id: user_id } });
};

// delete user
const deleteUser = async (userId) => {
    try {
        const token = localStorage.getItem('token');

        const response = await fetch(`/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error("Failed to delete the user.");
        }

        users.value = users.value.filter(user => user._id !== userId);

        alert("User deleted successfully");
    } catch (error) {
        console.error(error);
        alert("Failed to delete user");
    }
};


onMounted(() => {
    loadAsyncData();
});

onMounted(() => {
    document.title = "Users Management";
});
</script>

<template>

    <div class="container mt-5">
        <!-- search users -->
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search users" v-model="searchQuery">
            <button class="btn btn-outline-secondary" type="button" @click="loadAsyncData">Search</button>
        </div>

        <button type="button" class="btn btn-primary my-4" @click="logout">Log Out</button>
        <h2>Welcome back, {{ name }}</h2>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in filteredUsers" :key="user._id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <button class="btn btn-primary" @click="handleModifyBtnClick(user._id)">Modify</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="deleteUser(user._id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
