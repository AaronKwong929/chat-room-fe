import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

const history = createWebHashHistory(),
    routes: RouteRecordRaw[] = [
        {
            name: `Chat`,
            path: `/`,
            component: () => import(`@/views/Chat.vue`),
        },

        {
            path: "/:catchAll(.*)",
            redirect: `/`,
        },
    ],
    router = createRouter({
        history,
        routes,
    });

export default router;
