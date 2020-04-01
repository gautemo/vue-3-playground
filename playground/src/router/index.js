import { createRouter, createHistory } from '@posva/vue-router-next'
import Home from '@/views/Home'
import Fragment from '@/views/Fragment'
import Suspense from '@/views/Suspense'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/fragment',
    component: Fragment
  },
  {
    path: '/suspense',
    component: Suspense
  }
]

export const router = createRouter({
  history: createHistory(),
  routes
})
