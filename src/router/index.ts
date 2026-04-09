import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Main',
      path: '',
      component: () => import('@/view/Main.vue'),
    },
    {
      name: 'Mallakto',
      path: '/mallakto',
      component: () => import('@/view/Mallakto.vue'),
    },
    {
      name: 'Hood',
      path: '/hood',
      component: () => import('@/view/Hood.vue'),
    },
  ],
})

export default router
