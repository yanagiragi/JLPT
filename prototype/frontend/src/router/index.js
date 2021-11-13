import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Exam from '../views/Exam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/exam/*',
    name: 'Exam',
    component: Exam
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
