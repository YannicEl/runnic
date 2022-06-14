import { createRouter, createWebHistory } from 'vue-router';

import Index from './pages/index.vue';
import Run from './pages/run.vue';

const routes = [
	{ path: '/', component: Index },
	{ path: '/run', component: Run },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
