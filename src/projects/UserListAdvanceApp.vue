<template>
    <div class="user-app">
        <h1>User List</h1> <!-- Ô tìm kiếm -->
        <input v-model="searchTerm" placeholder="🔍 Tìm theo tên hoặc email..." />

        <!-- Nút tải lại -->
        <button @click="loadUsers">🔁 Tải lại</button>

        <!-- Trạng thái -->
        <p v-if="isLoading">Đang tải dữ liệu...</p>
        <p v-if="error" class="error">{{ error }}</p>

        <!-- Danh sách người dùng đã lọc + phân trang -->
        <ul v-if="!isLoading && !error">
        <li v-for="user in paginatedUsers" :key="user.id">
            <strong>{{ user.name }}</strong> – {{ user.email }}
        </li>
        </ul>

        <!-- Phân trang -->
        <div v-if="!isLoading && !error && totalPages > 1" class="pagination">
        <button :disabled="currentPage === 1" @click="currentPage--">⬅</button>
        <span>Trang {{ currentPage }} / {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++">➡</button>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'; 
import axios from 'axios';
const users = ref([]);
const isLoading = ref(true);
const error = ref('');
const searchTerm = ref('');
const currentPage = ref(1);
const pageSize = 5; // Số lượng người dùng hiển thị trên mỗi
const loadUsers = async () => {
    isLoading.value = true;
    error.value = '';
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        users.value = response.data;
    } catch (err) {
        error.value = 'Không thể tải người dùng: ' + err.message;
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    loadUsers();
});
// Lọc danh sách theo từ khoá
const filteredUsers = computed(() => {
  if (!searchTerm.value.trim()) return users.value
  const term = searchTerm.value.toLowerCase()
  return users.value.filter(user =>
    user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
  )
})

// Tổng số trang
const totalPages = computed(() =>
  Math.ceil(filteredUsers.value.length / pageSize)
)

// Danh sách người dùng theo trang hiện tại
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredUsers.value.slice(start, start + pageSize)
})

// Reset lại trang về 1 nếu tìm kiếm thay đổi
watch(searchTerm, () => {
  currentPage.value = 1
})
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
input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;            
}
ul {
    list-style-type: none;
    padding: 0;             
}
li {
    padding: 10px;
    border-bottom: 1px solid #eee;
}
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;       
}
button {
    padding: 10px 15px;
    background-color: #42b883;
    color: white;           
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
span {
    margin: 0 10px;
    font-weight: bold;
}
</style>