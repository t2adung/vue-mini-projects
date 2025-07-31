<template>
    <div class="form-wrapper">
        <h1>Simple Form</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" />
                <p  v-if="errors.name" class="error">{{ errors.name }}</p>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" />
                <p v-if="errors.email" class="error">{{ errors.email }}</p>
            </div>
            <div class="form-group">    
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" />
                <p v-if="errors.password" class="error">{{ errors.password }}</p>  
            </div>
            <button type="submit">Submit</button>
        </form>
        <div v-if="successMessage" class="success">
            <p>{{ successMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const errors = ref({});
const successMessage = ref('');

const validateForm = () => {
    errors.value = {};
    if (!name.value) {
        errors.value.name = 'Name is required';
    }
    if (!email.value) {
        errors.value.email = 'Email is required';
    }
    if (email.value && !/\S+@\S+\.\S+/.test(email.value)) {
        errors.value.email = 'Email is invalid';
    }
    if (!password.value) {
        errors.value.password = 'Password is required';
    }
    if (password.value && password.value.length < 6) {
        errors.value.password = 'Password must be at least 6 characters';
    }
    return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
    if (validateForm()) {
        successMessage.value = 'Form submitted successfully!';
        // Reset form fields
        name.value = '';
        email.value = '';
        password.value = '';
        errors.value = {};  
    }
};

</script>

<style scoped>
.form-wrapper {
    max-width: 400px;
    margin: auto;
    text-align: center;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input {
    width: 100%;
    padding: 10px; 
    border: 1px solid #ccc;
}
</style>