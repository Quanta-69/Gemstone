import './assets/styles/main.css';
import './assets/styles/defaults.css'
import './assets/styles/components.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
