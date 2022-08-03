import { createApp } from 'vue'
import App from './App.vue'
import Jaui from '@/index'
// import "@theme/bootstrap.scss"
import "@theme/../src/index.scss"

const app = createApp(App)
app.use(Jaui)
app.mount('#app')
