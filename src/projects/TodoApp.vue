<template>
    <div class="todo-app">
        <h1>Todo App</h1>
        <div class="input-section">
            <input v-model="newTodo" placeholder="Add a new todo" @keyup.enter="addTodo" />
            <button @click="addTodo">Add</button>  
        </div>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <span :class="{ completed: todo.completed }" @click="toggleTodo(index)">{{ todo.text }}</span>
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
        <p v-if="todos.length === 0">No todos yet!</p>
        <p v-if="todos.length > 0">Total Todos: {{ todos.length }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const newTodo = ref('');
const todos = ref([]);  

const addTodo = () => {
    if (newTodo.value.trim()) {
        todos.value.push({ text: newTodo.value, completed: false });
        newTodo.value = '';
    }
}

const toggleTodo = (index) => {
    todos.value[index].completed = !todos.value[index].completed;
};
const removeTodo = (index) => {
    todos.value.splice(index, 1);
};
    
</script>

<style scoped>
.todo-app {
    max-width: 600px;
    margin: auto;
    text-align: center;
}
.input-section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
input {
    width: 70%;
    padding: 10px;
    margin-right: 10px;
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
button:hover {
    background-color: #367c6b;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;              
}
span {
    cursor: pointer;
}
span.completed {
    text-decoration: line-through;
    color: #aaa;
}
p {
    color: #666;
    font-style: italic;
}

</style>