<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const modifyData = ref({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    password: ''
});

const route = useRouter();
const message = ref('');
const registrationMessage = ref('');

const modify = async () => {
    var url = '/api/users';
    var method = 'PUT';
    registrationMessage.value = '';  // Reset the message
    try {
        const id = localStorage.getItem('user-id');
        url = url + '/' + id + '/update';
        const token = localStorage.getItem('token');
        const response = await fetch(url, {
            method: method,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifyData.value)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        registrationMessage.value = "Modify success.";

        route.push({ name: 'view-surveys' });
    } catch (error) {
        registrationMessage.value = error.message;
    }
}

// a function to get the survey from the backend
const getUser = async function (id) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/users/' + id, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(data.message);
        }
        const data = await response.json();
        
        modifyData.value = data;

        registrationMessage.value = "Modify success.";
    } catch (error) {
        registrationMessage.value = error.message;
    }
}

onMounted(async () => {
    const id = localStorage.getItem('user-id');
    // if there is an id in the route
    if (id) {
        await getUser(id);
    }
});
</script>

<template>
    <main>
        <div class="row" id="container" style="width:1000px">
            <h2>Modify User</h2>
            <form @submit.prevent="register">
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" v-model="modifyData.first_name" class="form-control" id="firstName" required>
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" v-model="modifyData.last_name" class="form-control" id="lastName" required>
                </div>
                <div class="mb-3">
                    <label for="registerEmail" class="form-label">Email address</label>
                    <input type="email" v-model="modifyData.email" class="form-control" id="registerEmail" required>
                </div>
                <div class="mb-3">
                    <label for="gender" class="form-label">Gender</label>
                    <select class="form-control" v-model="modifyData.gender" id="gender" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="registerPassword" class="form-label">Password</label>
                    <input type="password" v-model="modifyData.password" class="form-control" id="registerPassword"
                        required>
                </div>
                <button type="button" @click="modify" class="btn btn-success">Modify</button>
                <div v-if="registrationMessage" class="alert alert-info mt-3">{{ registrationMessage }}</div>
            </form>
        </div>
    </main>
</template>
