import { createRouter, createHistory } from '@posva/vue-router-next'
import Home from '@/views/Home'
import Fragment from '@/views/Fragment'
import Suspense from '@/views/Suspense'
import CompositionApi from '@/views/CompositionApi'
import Portal from '@/views/Portal'
import Multiple from '@/views/Multiple'
import Transit from '@/views/Transit'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/composition-api',
    component: CompositionApi
  },
  {
    path: '/fragment',
    component: Fragment
  },
  {
    path: '/suspense',
    component: Suspense
  },
  {
    path: '/portal',
    component: Portal
  },
  {
    path: '/multiple',
    component: Multiple
  },
  {
    path: '/transition',
    component: Transit
  }
]

export const router = createRouter({
  history: createHistory(),
  routes
})
