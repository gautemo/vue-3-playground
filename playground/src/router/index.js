import { createRouter, createHistory } from '@posva/vue-router-next'
import Home from '@/views/Home'
import Fragment from '@/views/Fragment'
import Suspense from '@/views/Suspense'
import CompositionApi from '@/views/CompositionApi'
import CompositionApi2 from '@/views/CompositionApi2'
import CompositionApi3 from '@/views/CompositionApi3'
import Teleport from '@/views/Teleport'
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
    path: '/composition-api2',
    component: CompositionApi2
  },
  {
    path: '/composition-api3',
    component: CompositionApi3
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
    path: '/teleport',
    component: Teleport
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
