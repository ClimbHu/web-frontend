import { createApp } from 'vue'
import App from './App.vue'

import router from './routers/router'

// 导入自己创建的pinia.js文件
import pinia from './pinia.js'

const app = createApp(App)
// 全局使用路由
app.use(router)
// 全局使用pinia
app.use(pinia)
app.mount('#app')
