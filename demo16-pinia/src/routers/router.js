import { createRouter, createWebHashHistory } from "vue-router"

import List from "../components/List.vue"
import Operate from "../components/Operate.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Operate
        },
        {
            path: "/list",
            component: List
        },
        {
            path: "/operate",
            components: {
                default: Operate,
                list: List
            }
        },
    ]
})

export default router