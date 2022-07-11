// i18n
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
// vue router
import router from '@/router/index';
// pinia
import store from '@/store';
import App from './App.vue';
import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css';

// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import 'virtual:windi-devtools';
import '@/assets/styles/index.scss';

const app = createApp(App);

app.use(ElementPlus)
app.use(router).use(store);

app.mount('#app');
