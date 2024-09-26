import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import CustomerManagement from '../components/Home/CustomerManagement.vue'
import CustomerStats from '../components/Stats/CustomerStats.vue'

const routes = [
  { path: '/', component: CustomerManagement },
  { path: '/stats', component: CustomerStats },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
}) 
