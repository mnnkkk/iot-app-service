import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/app-service/app-service-list'
  },
  {
    path: '/app-service',
    redirect: '/app-service/app-service-list'
  },
  {
    path: '/app-service/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/app-service/app-service-list',
    name: 'app-service-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/app-service-list')
  },
  {
    path: '/app-service/app-service-configurable/:slug',
    name: 'app-service-configurable',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/app-service-configurable'),
    props: true
  }
]

export default routes
