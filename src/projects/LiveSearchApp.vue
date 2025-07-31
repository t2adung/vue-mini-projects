<template>
    <div class="search-app">
        <h1>Live Search App</h1>
        <div class="input-section">
            <input v-model="query" placeholder="Search..." @input="performSearch" />
        </div>
        <ul>
            <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
        </ul>
        <p v-if="filteredItems.length === 0">No results found!</p>  

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const query = ref('');
const items = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
]);

const filteredItems = computed(() => {
    return items.value.filter(item => item.name.toLowerCase().includes(query.value.toLowerCase()));
});
const performSearch = () => {
    // This function can be used to perform additional actions on search input
    console.log(`Searching for: ${query.value}`);
};
</script>

<style scoped>
.search-app {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.input-section {
    margin-bottom: 20px;
}

input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

p {
    color: red;
}   
</style>