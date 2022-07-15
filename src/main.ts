import { createApp } from 'vue'
import App from './App.vue'
import Jaui from '@/index'

const app = createApp(App)
app.use(Jaui)
app.mount('#app')
