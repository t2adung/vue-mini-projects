import { createRouter, createWebHistory } from 'vue-router';

import CounterApp from '../projects/CounterApp.vue';
import TodoApp from '../projects/TodoApp.vue';
import BmiCaculatorApp from '../projects/BmiCaculatorApp.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/counter', component: CounterApp },
    { path: '/todo', component: TodoApp },
    { path: '/bmi', component: BmiCaculatorApp }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;