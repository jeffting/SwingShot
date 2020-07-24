import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reviews from '../views/Reviews.vue'
import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
