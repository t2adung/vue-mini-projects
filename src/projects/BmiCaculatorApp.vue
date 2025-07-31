<template>
    <div class="bmi-calculator">
        <h1>BMI Calculator</h1>
        <div class="input-section">
            <input v-model="weight" type="number" placeholder="Weight (kg)" />kg
            <input v-model="height" type="number" placeholder="Height (cm)" />cm
        </div>
        <p v-if="bmi">Your BMI is: {{ bmi }}</p>
        <p v-if="message" class="error">{{ message }}</p>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';  
const weight = ref(0);
const height = ref(0);
const bmi = computed(() => {
    if (height.value > 0) {
        const heightInMeters = height.value / 100
        return weight.value / (heightInMeters * heightInMeters)
    }
    return 0
});

const message = ref('')

// Theo dõi bmi thay đổi → cập nhật thông điệp
watch(bmi, (newVal) => {
  if (newVal < 18.5) {
    message.value = 'Thiếu cân'
  } else if (newVal < 24.9) {
    message.value = 'Bình thường'
  } else if (newVal < 29.9) {
    message.value = 'Thừa cân'
  } else {
    message.value = 'Béo phì'
  }
})

</script>

<style scoped>
.bmi-calculator {
    max-width: 400px;
    margin: auto;
    text-align: center;
}
.input-section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
input {
    width: 45%;
    padding: 10px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    padding: 10px 15px;
    background-color: #42b883;
    color: white;
    border: none;                           
    border-radius: 5px;
    cursor: pointer;
}
</style>