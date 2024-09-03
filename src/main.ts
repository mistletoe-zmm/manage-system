import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'dayjs/locale/zh-cn';
import router from '@/router/index';

import '@/style/index.less';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia);
app.use(router);
app.mount('#app');
