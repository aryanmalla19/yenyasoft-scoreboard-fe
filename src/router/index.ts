import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue';
import PublicScoreboard from '@/views/PublicScoreboard.vue';
import LiveMatch from '@/views/LiveMatch.vue';
import LeaguePage from '@/views/LeaguePage.vue';
import Dashboard from '@/views/Admin/Dashboard.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import AdminLeaguePage from '@/views/Admin/AdminLeaguePage.vue';
import AdminTeamPage from '@/views/Admin/AdminTeamPage.vue';
import AdminPlayerPage from '@/views/Admin/AdminPlayerPage.vue';

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
      meta: { requiresAuth: true},
      children: [
        { path: '', name:'AdminDashboard', component: Dashboard}
      ]
    },
    {
      path: '/admin/leagues',
      component: AdminLayout,
      meta: { requiresAuth: true},
      children: [
        { path: '', name:'AdminLeague', component: AdminLeaguePage}
      ]
    },
    {
      path: '/admin/leagues/:slug/teams',
      component: AdminLayout,
      meta: { requiresAuth: true},
      children: [
        { path: '', name:'AdminTeam', component: AdminTeamPage}
      ]
    },
    {
      path: '/admin/players',
      component: AdminLayout,
      meta: { requiresAuth: true},
      children: [
        { path: '', name:'AdminPlayer', component: AdminPlayerPage}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if(to.meta.requiresAuth && !token){
    return next('/');
  }

  next();
})

export default router
