import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const backend = import.meta.env.VITE_BACKEND_URL

axios.defaults.baseURL = backend
axios.defaults.headers = {
  'ngrok-skip-browser-warning': '69420'
}
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
