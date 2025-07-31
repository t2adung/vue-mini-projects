import { createRouter, createWebHistory } from 'vue-router';

import CounterApp from '../projects/CounterApp.vue';
import TodoApp from '../projects/TodoApp.vue';
import BmiCaculatorApp from '../projects/BmiCaculatorApp.vue';
import LiveSearchApp from '../projects/LiveSearchApp.vue';
import CountdownApp from '../projects/CountdownApp.vue';
import ThemeToogleApp from '../projects/ThemeToogleApp.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/counter', component: CounterApp },
    { path: '/todo', component: TodoApp },
    { path: '/bmi', component: BmiCaculatorApp }, 
    { path: '/livesearch', component: LiveSearchApp }, 
    { path: '/countdown', component: CountdownApp }, 
    { path: '/themetoggle', component: ThemeToogleApp }, 

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;