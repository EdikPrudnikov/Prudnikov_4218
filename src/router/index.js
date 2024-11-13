import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About.vue'; // Импорт компонента About
import Home from '@/views/Home.vue'; // Импорт главного компонента

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About, // Указание компонента для маршрута
    },
  ],
});
