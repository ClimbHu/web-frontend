import { createApp } from 'vue'
import App from './App.vue'

// 在整个App.vue中使用路由
import router from './routers/router'

let app = createApp(App)
//绑定路由对象
app.use(router)
//挂载视图
app.mount('#app')
