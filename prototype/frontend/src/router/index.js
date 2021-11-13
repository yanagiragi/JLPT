import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Examine from '../views/Examine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/examine',
    name: 'examine',
    component: Examine
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
