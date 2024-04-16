<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const modifyData = ref({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: ''
});

const route = useRouter();
const message = ref('');
const registrationMessage = ref('');

const modify = async () => {
    registrationMessage.value = '';  // Reset the message
    try {
        const response = await fetch('/api/users/:id/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifyData.value)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        registrationMessage.value = "Modify success.";
    } catch (error) {
        registrationMessage.value = error.message;
    }
}

// a function to get the survey from the backend
const getUser = async function () {
    // get the survey from the backend
    const response = await fetch('/api/user/' + route.params.id);
    // convert the response to json
    const json = await response.json();
    // log the json
    console.log(json);
    // set the survey
    modifyData.value = json;
}

onMounted(async () => {
    // if there is an id in the route
    if (route.params.id) {
        await getUser();
    }
});
</script>

<template>
    <main class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h2>Register</h2>
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" v-model="modifyData.firstName" class="form-control" id="firstName" required>
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" v-model="modifyData.lastName" class="form-control" id="lastName" required>
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
                        <input type="password" v-model="modifyData.password" class="form-control" id="registerPassword" required>
                    </div>
                    <button type="button" @click="modify" class="btn btn-success">Modify</button>
                    <div v-if="registrationMessage" class="alert alert-info mt-3">{{ registrationMessage }}</div>
                </form>
            </div>
        </div>
    </main>
</template>
