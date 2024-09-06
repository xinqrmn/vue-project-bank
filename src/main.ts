import { createApp } from 'vue'
import pinia from './store/store'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'
import '@/assets/styles/_variables.scss';


const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .mount('#app')
