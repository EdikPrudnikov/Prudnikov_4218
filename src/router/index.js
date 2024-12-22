import Vue from 'vue';
import Router from 'vue-router';
import Button1 from '@/components/Button1.vue';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Button1',
      name: 'Button1',
      component: Button1,
    },
  ],
});
