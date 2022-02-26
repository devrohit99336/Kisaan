import { createApp } from 'vue';
import App from './App.vue';
import route from './routes/router';
import i18n from './i18n/lang';
import store from './store';

const app = createApp(App); 
app.use(route);
app.use(i18n);
app.use(store);
app.mount('#app');
