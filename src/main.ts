import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'dayjs/locale/zh-cn';
import router from '@/router/index';

import '@/style/index.less';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
