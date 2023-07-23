import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const backend = 'http://synerg.centralindia.cloudapp.azure.com'

axios.defaults.baseURL = backend
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
