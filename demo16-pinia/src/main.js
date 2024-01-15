import { createApp } from 'vue'
import App from './App.vue'

import router from './routers/router'

// 开启全局的Pinia功能
import {createPinia} from "pinia"
let pinia = createPinia()

let app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
