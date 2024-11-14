import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Button1 from './components/Button1.vue';
import Button2 from './components/Button2.vue';

import Button3 from './components/components_button/side_page/Button3.vue';
import Button4 from './components/components_button/side_page/Button4.vue';
import Button5 from './components/components_button/side_page/Button5.vue';

import ButtonGame2_3 from './components/components_button/components_button2_3/ButtonGame2_3.vue';
import ButtonPPT2_3 from './components/components_button/components_button2_3/ButtonPPT2_3.vue';
import ButtonDOCX2_3 from './components/components_button/components_button2_3/ButtonDOCX2_3.vue';

import ButtonGame3_4 from './components/components_button/components_button3_4/ButtonGame3_4.vue';
import ButtonPPT3_4 from './components/components_button/components_button3_4/ButtonPPT3_4.vue';
import ButtonDOCX3_4 from './components/components_button/components_button3_4/ButtonDOCX3_4.vue';

import ButtonGame4_5 from './components/components_button/components_button4_5/ButtonGame4_5.vue';
import ButtonPPT4_5 from './components/components_button/components_button4_5/ButtonPPT4_5.vue';
import ButtonDOCX4_5 from './components/components_button/components_button4_5/ButtonDOCX4_5.vue';

import ButtonGame5_6 from './components/components_button/components_button5_6/ButtonGame5_6.vue';
import ButtonPPT5_6 from './components/components_button/components_button5_6/ButtonPPT5_6.vue';
import ButtonDOCX5_6 from './components/components_button/components_button5_6/ButtonDOCX5_6.vue';

import ButtonGame6_7 from './components/components_button/components_button6_7/ButtonGame6_7.vue';
import ButtonPPT6_7 from './components/components_button/components_button6_7/ButtonPPT6_7.vue';
import ButtonDOCX6_7 from './components/components_button/components_button6_7/ButtonDOCX6_7.vue';

const routes = [
  { path: '/', component: Home }, // маршрут для главной страницы
  { path: '/Button1', component: Button1 }, // маршрут для страницы "2-3"
  { path: '/Button2', component: Button2 }, // маршрут для страницы "3-4"
  { path: '/Button3', component: Button3 }, // маршрут для страницы "4-5"
  { path: '/Button4', component: Button4 }, // маршрут для страницы "5-6"
  { path: '/Button5', component: Button5 }, // маршрут для страницы "6-7"

  { path: '/ButtonGame2_3', component: ButtonGame2_3 }, // маршрут для страницы "игры"
  { path: '/ButtonPPT2_3', component: ButtonPPT2_3 }, // маршрут для страницы "презентации"
  { path: '/ButtonDOCX2_3', component: ButtonDOCX2_3 }, // маршрут для страницы "с текстом"
  
  { path: '/ButtonGame3_4', component: ButtonGame3_4 }, // маршрут для страницы "игры"
  { path: '/ButtonPPT3_4', component: ButtonPPT3_4 }, // маршрут для страницы "презентации"
  { path: '/ButtonDOCX3_4', component: ButtonDOCX3_4 }, // маршрут для страницы "с текстом"

  { path: '/ButtonGame4_5', component: ButtonGame4_5 }, // маршрут для страницы "игры"
  { path: '/ButtonPPT4_5', component: ButtonPPT4_5 }, // маршрут для страницы "презентации"
  { path: '/ButtonDOCX4_5', component: ButtonDOCX4_5 }, // маршрут для страницы "с текстом"

  { path: '/ButtonGame5_6', component: ButtonGame5_6 }, // маршрут для страницы "игры"
  { path: '/ButtonPPT5_6', component: ButtonPPT5_6 }, // маршрут для страницы "презентации"
  { path: '/ButtonDOCX5_6', component: ButtonDOCX5_6 }, // маршрут для страницы "с текстом"

  { path: '/ButtonGame6_7', component: ButtonGame6_7 }, // маршрут для страницы "игры"
  { path: '/ButtonPPT6_7', component: ButtonPPT6_7 }, // маршрут для страницы "презентации"
  { path: '/ButtonDOCX6_7', component: ButtonDOCX6_7 }, // маршрут для страницы "с текстом"
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
