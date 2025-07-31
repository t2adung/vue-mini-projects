<template>
    <div class="user-app">
        <h1>User List</h1>
        <p v-if="isLoading">Loading...</p>
        <p v-if="errorMessages" class="error">{{ errorMessages }}</p>
        <ul v-if="!isLoading && !errorMessages">
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([])
const isLoading = ref(true);
const errorMessages = ref('');

const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        users.value = await response.json();
    } catch (error) {
        errorMessages.value = 'Failed to load users: ' + error.message;
    } finally {
        isLoading.value = false;
    }
};
onMounted(() => {
    fetchUsers();
}); 

</script>

<style scoped>
.user-app {
    max-width: 600px;
    margin: auto;
    text-align: center;
}
.error {
    color: red;     
}
ul {
    list-style-type: none;
    padding: 0; 
}
li {
    padding: 10px;
    border-bottom: 1px solid #eee;
}
</style>