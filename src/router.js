import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './components/About.vue';
import Lol from './components/Lol.vue';
import Dowland from './components/Dowland.vue';

const routes = [
  { path: '/', component: Home }, // маршрут для главной страницы
  { path: '/about', component: About }, // маршрут для страницы "О нас"
  { path: '/Lol', component: Lol }, // маршрут для страницы "О lol"
  { path: '/Dowland', component: Dowland },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
