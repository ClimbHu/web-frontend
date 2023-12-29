import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/login",
            component: Login
        }
    ]
})

// 通过路由的前置守卫 校验登录
router.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        // 判断如果是要去登录视图，直接放行即可
        next()
    } else {
        // 如果是其他任何资源，都要在登陆之后才会放行，如果没登录，则重定向到登录视图
        const username = sessionStorage.getItem("username")
        if (null != username) {
            next()
        } else {
            // next()做重定向，一定要在某个分支下，不能一上来就重定向，否则就陷入了死循环
            next("/login")
        }
    }
})

export default router
