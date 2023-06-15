import { createRouter ,createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/:pokemon',
            component: () => import('../views/Pokemon.vue')
        }
    ]
})