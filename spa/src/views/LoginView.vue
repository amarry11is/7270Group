<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const credentials = ref({
    email: '',
    password: ''
});

const registrationData = ref({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: ''
});

const router = useRouter();
const message = ref('');
const registrationMessage = ref('');

const login = async () => {
    message.value = '';  // Reset the message
    try {
        const response = await fetch('/api/surveys/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials.value)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        localStorage.setItem('token', data.token);
        message.value = "Login successful. Redirecting...";
        setTimeout(() => router.push({ name: 'users' }), 2000);
    } catch (error) {
        message.value = error.message;
    }
}

const register = async () => {
    registrationMessage.value = '';  // Reset the message
    try {
        const response = await fetch('/api/surveys/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationData.value)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        registrationMessage.value = "Registration successful. Please log in.";
    } catch (error) {
        registrationMessage.value = error.message;
    }
}
</script>

<template>
    <main class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h2>Login</h2>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="loginEmail" class="form-label">Email address</label>
                        <input type="email" v-model="credentials.email" class="form-control" id="loginEmail" required>
                    </div>
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label">Password</label>
                        <input type="password" v-model="credentials.password" class="form-control" id="loginPassword" required>
                    </div>
                    <button type="button" @click="login" class="btn btn-primary">Login</button>
                    <div v-if="message" class="alert alert-info mt-3">{{ message }}</div>
                </form>
            </div>
            <div class="col-md-6">
                <h2>Register</h2>
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" v-model="registrationData.firstName" class="form-control" id="firstName" required>
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" v-model="registrationData.lastName" class="form-control" id="lastName" required>
                    </div>
                    <div class="mb-3">
                        <label for="registerEmail" class="form-label">Email address</label>
                        <input type="email" v-model="registrationData.email" class="form-control" id="registerEmail" required>
                    </div>
                    <div class="mb-3">
                        <label for="gender" class="form-label">Gender</label>
                        <select class="form-control" v-model="registrationData.gender" id="gender" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="registerPassword" class="form-label">Password</label>
                        <input type="password" v-model="registrationData.password" class="form-control" id="registerPassword" required>
                    </div>
                    <button type="button" @click="register" class="btn btn-success">Register</button>
                    <div v-if="registrationMessage" class="alert alert-info mt-3">{{ registrationMessage }}</div>
                </form>
            </div>
        </div>
    </main>
</template>
