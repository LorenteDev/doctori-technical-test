import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'
import Results from '../views/Results.vue'

const routes = [
  {
    path: '/',
    name: 'form',
    component: Form
  },
  {
    path: '/results',
    name: 'results',
    component: Results
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
