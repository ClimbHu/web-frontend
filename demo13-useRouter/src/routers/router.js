/* 导入路由创建的相关方法 */
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入.vue组件
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'
import ShowDetail from '../components/ShowDetail.vue'
import ShowDetail2 from '../components/ShowDetail2.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/showDetail2',
            component: ShowDetail2
        },
        {
            path: '/showDetail/:id/:language',
            component: ShowDetail
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/update',
            component: Update
        },


    ]
})

export default router