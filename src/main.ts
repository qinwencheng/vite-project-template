import { createApp } from 'vue';
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// vue router
import router from '@/router/index';
// pinia
import store from '@/store';
// windicss
import 'virtual:windi.css';
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import 'virtual:windi-devtools';

import '@/assets/styles/index.scss';

import App from './App.vue';

const app = createApp(App);

app.use(router).use(store).use(ElementPlus);

app.mount('#app');
