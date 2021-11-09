import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFoundComponent',
    component: () => import('../views/NotFoundComponent.vue')
  },
  {
    path: '/person/:idPerson',
    name: 'Person',
    component: () => import('../views/Person.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
