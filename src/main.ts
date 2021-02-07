import { createApp } from 'vue';
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from '@/App.vue';
import '@/static/style/index.scss';
import router from './router';
import Element from '@/plugins/element.ts';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
app.use(Element);
app.use(router);
app.mount('#app');
