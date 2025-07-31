<template>
    <div class="countdown-app">
        <h1>Countdown App</h1>
        <div class="input-section">
            <input v-model="countdownValue" type="number" placeholder="Enter countdown time in seconds" />
            <button @click="startCountdown">Start Countdown</button>
        </div>
        <p v-if="message">{{ message }}</p>

        <h1>Auto countdown</h1>
        <h2 v-if="timeLeft > 0">{{ minutes }} phút {{ seconds }} giây</h2>
        <h2 v-else>Het gio</h2>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
const countdownValue = ref(0);
const message = ref('');   

const startCountdown = () => {
    if (countdownValue.value <= 0) {
        message.value = 'Please enter a valid countdown time.';
        return;
    }
    message.value = '';
    let interval = setInterval(() => {
        if (countdownValue.value > 0) {
            countdownValue.value--;
        } else {
            clearInterval(interval);
            message.value = 'Countdown finished!';
        }
    }, 1000);
};

const totalTime = 10; // 10 minutes in seconds
const timeLeft = ref(totalTime);
const timer = null

const minutes = computed(() => {
    return Math.floor(timeLeft.value / 60);
});
const seconds = computed(() => {
    return timeLeft.value % 60;
});

onMounted(() => {
    countdownValue.value = 10; // Default countdown value
    const interval = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});

onUnmounted(() => {
    clearInterval(timer)
});

</script>

<style scoped>
.countdown-app {
    max-width: 400px;
    margin: auto;
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
button {
    padding: 10px 15px;
    background-color: #42b883;
    color: white;               
    border: none;
    border-radius: 5px;
}   
</style>