// 不需要 router

import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

const history = createWebHashHistory(),
    routes: RouteRecordRaw[] = [
        {
            name: `Home`,
            path: `/home`,
            component: () => import(`@/views/Home.vue`),
        },

        {
            name: `About`,
            path: `/home`,
            component: () => import(`@/views/Home.vue`),
        },

        {
            path: "/:catchAll(.*)",
            redirect: `/home`,
        },
    ],
    router = createRouter({
        history,
        routes,
    });

export default router;
