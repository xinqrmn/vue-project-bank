import { createApp } from 'vue';
import pinia from './store/store';
import router from './router';
import App from './App.vue';
import { app as firebaseApp } from '../firebase.config';
import '@/assets/styles/main.scss';
import '@/assets/styles/_variables.scss';

const app = createApp(App);

console.log('Firebase initialized', firebaseApp);

app.use(pinia).use(router).mount('#app');
