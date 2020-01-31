import Top from '../views/Top.vue'
import HeaderEvent from '../views/HeaderEvent.vue'

export default [
  {
    path: '/',
    name: 'top',
    component: Top
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