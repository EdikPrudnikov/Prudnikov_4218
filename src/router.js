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

import Lapbooks from './components/components_button/sidebar/Lapbooks.vue';
import PsychologicalTraining from './components/components_button/sidebar/PsychologicalTraining.vue';
import WorkingWithParents from './components/components_button/sidebar/WorkingWithParents.vue';
import ElectronicLibrary from './components/components_button/sidebar/ElectronicLibrary.vue';
import ElectronicResources from './components/components_button/sidebar/ElectronicResources.vue';
import MultStudio from './components/components_button/sidebar/MultStudio.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Button1', component: Button1 },
  { path: '/Button2', component: Button2 },
  { path: '/Button3', component: Button3 },
  { path: '/Button4', component: Button4 },
  { path: '/Button5', component: Button5 },
  { path: '/ButtonGame2_3', component: ButtonGame2_3 },
  { path: '/ButtonPPT2_3', component: ButtonPPT2_3 },
  { path: '/ButtonDOCX2_3', component: ButtonDOCX2_3 },
  { path: '/ButtonGame3_4', component: ButtonGame3_4 },
  { path: '/ButtonPPT3_4', component: ButtonPPT3_4 },
  { path: '/ButtonDOCX3_4', component: ButtonDOCX3_4 },
  { path: '/ButtonGame4_5', component: ButtonGame4_5 },
  { path: '/ButtonPPT4_5', component: ButtonPPT4_5 },
  { path: '/ButtonDOCX4_5', component: ButtonDOCX4_5 },
  { path: '/ButtonGame5_6', component: ButtonGame5_6 },
  { path: '/ButtonPPT5_6', component: ButtonPPT5_6 },
  { path: '/ButtonDOCX5_6', component: ButtonDOCX5_6 },
  { path: '/ButtonGame6_7', component: ButtonGame6_7 },
  { path: '/ButtonPPT6_7', component: ButtonPPT6_7 },
  { path: '/ButtonDOCX6_7', component: ButtonDOCX6_7 },
  
  { path: '/Lapbooks', component: Lapbooks },
  { path: '/PsychologicalTraining', component: PsychologicalTraining },
  { path: '/WorkingWithParents', component: WorkingWithParents },
  { path: '/ElectronicLibrary', component: ElectronicLibrary },
  { path: '/ElectronicResources', component: ElectronicResources },
  { path: '/MultStudio', component: MultStudio },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
