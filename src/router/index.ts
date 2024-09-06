import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '/src/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: false,
      layout: 'main',
    }
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('@/views/Careers.vue'),
    meta: {
      auth: false,
      layout: 'main',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      auth: false,
      layout: 'main',
    }
  },
  {
    path: '/secure',
    name: 'Secure',
    component: () => import('@/views/Secure.vue'),
    meta: {
      auth: false,
      layout: 'main',
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue'),
    meta: {
      auth: false,
      layout: 'auth',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router
