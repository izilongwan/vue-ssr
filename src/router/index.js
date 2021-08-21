import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
   .use(VueMeta)

export default () => {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        alias: '/demo',
        component: () => import('@/views/Demo'),
      },
      {
        path: '/about',
        component: () => import('@/views/About'),
      },
      {
        path: '/404',
        component: () => import('@/views/_404')
      },
      {
        path: '/(.*)',
        component: () => import('@/views/_404')
      }
    ]
  })
}
