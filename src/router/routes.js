import TopPage from '../views/Top.vue'
import HeaderEvent from '../views/HeaderEvent.vue'

export default [
  {
    path: '/',
    name: 'top',
    component: TopPage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: HeaderEvent
  }
]