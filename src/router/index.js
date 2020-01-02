import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import InputPlayers from '@/views/InputPlayers'
import CheckRoles from '@/views/CheckRoles'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/input-players',
    name: 'input-players',
    component: InputPlayers
  },
  {
    path: '/check-roles',
    name: 'check-roles',
    component: CheckRoles
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
