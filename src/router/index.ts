import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue';
import PublicScoreboard from '@/views/PublicScoreboard.vue';
import LiveMatch from '@/views/LiveMatch.vue';
import LeaguePage from '@/views/LeaguePage.vue';
import Dashboard from '@/views/Admin/Dashboard.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

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
    {
      path: '/match/live/:id',
      component: PublicLayout,
      children: [
        { path: '', name:'LiveMatch', component: LiveMatch}
      ]
    },
    {
      path: '/leagues/:slug',
      component: PublicLayout,
      children: [
        { path: '', name:'LeaguePage', component: LeaguePage}
      ]
    },
    {
      path: '/admin/dashboard',
      component: AdminLayout,
      children: [
        { path: '', name:'AdminDashboard', component: Dashboard}
      ]
    }
  ]
})

export default router
