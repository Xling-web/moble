import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart.vue')
  },{
    path: '/list',
    name: 'list',
    component: () => import('@/views/list.vue')
  },{
    path: '/',
    name: 'detail',
    component: () => import('@/views/detail.vue')
  }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
