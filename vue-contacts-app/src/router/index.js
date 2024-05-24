import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../views/ContactList.vue'

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
