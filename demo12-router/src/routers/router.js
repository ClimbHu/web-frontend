// 导入路由创建的相关方法
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入vue组件
import Home from "../components/Home.vue"
import List from "../components/List.vue"
import Add from "../components/Add.vue"
import Update from "../components/Update.vue"

// 创建一个路由对象
const router = createRouter({
    // history属性用于记录路由的历史
    history: createWebHashHistory(),
    // 用于定义多个不同风格的路径和组件之间的对应关系
    routes: [
        {
            path: "/home",
            components: {
                default: Home,
                homeView: Home
            }
        },
        {
            path: "/list",
            components: {
                listView: List
            }
        },
        {
            path: "/add",
            components: {
                addView: Add
            }
        },
        {
            path: "/update",
            components: {
                updateView: Update
            }
        },
        {
            path: "/",
            component: Home
        },
        {
            path: "/showAll",
            redirect: "/list"
        }
    ]
})

// 对外暴露路由对象
export default router;