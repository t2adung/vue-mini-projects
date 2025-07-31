<template>
    <div :class="{ dark : isDark }" class="theme-wrapper">
        <h1>Theme Toggle App</h1>
        <button @click="toggleTheme">{{ isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme' }}</button>
        <p>Current Theme: {{ isDark ? 'Dark' : 'Light' }}</p>

    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
const isDark = ref(false);
const toggleTheme = () => {
    isDark.value = !isDark.value;
};
watch(isDark, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
});
onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    isDark.value = savedTheme === 'dark';
});
</script>

<style scoped>
.theme-wrapper {
  text-align: center;
  padding: 50px;
  transition: background 0.3s, color 0.3s;
}

.theme-wrapper.dark {
  background-color: #222;
  color: white;
}

.theme-wrapper:not(.dark) {
  background-color: #f2f2f2;
  color: #333;
}
button {
    padding: 10px 20px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 5px;
}
</style>