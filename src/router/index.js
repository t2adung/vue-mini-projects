import { createRouter, createWebHistory } from 'vue-router';

import CounterApp from '../projects/CounterApp.vue';
import TodoApp from '../projects/TodoApp.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/counter', component: CounterApp },
    { path: '/todo', component: TodoApp },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;