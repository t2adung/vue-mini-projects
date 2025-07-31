<template>
    <div class="counter">
        <h2>Counter App</h2>
        <p>Current Count: {{ count }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
        <p>Last Updated: {{ lastUpdated }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const lastUpdated = ref(null);

const increment = () => {
    count.value++;
    lastUpdated.value = new Date().toLocaleTimeString();
};
const decrement = () => {
    count.value--;
    lastUpdated.value = new Date().toLocaleTimeString();
};
const reset = () => {
    count.value = 0;
    lastUpdated.value = new Date().toLocaleTimeString();
};
</script>

<style scoped>
.counter {
    text-align: center;
    margin-top: 20px;
}
h2 {
    color: #42b883;
}
p {
    font-size: 18px;
    color: #333;
}
button {
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
    margin: 0 10px;
}
button:hover {
    background-color: #367c6b;
} 

</style>