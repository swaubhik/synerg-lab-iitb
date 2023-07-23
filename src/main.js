import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import { BACKEND_URL } from './config'



axios.defaults.baseURL = BACKEND_URL
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

