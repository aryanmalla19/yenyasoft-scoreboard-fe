import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue';
import PublicScoreboard from '@/views/PublicScoreboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      component: PublicLayout,
      children: [
        { path: '', name: 'Public', component:PublicScoreboard},
      ]
    },
  ]
})

export default router
