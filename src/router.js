import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloWorld.vue'
import Chat from './components/Chat.vue'
import User from './components/user.vue'
import UserCreate from './components/user-create.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/chat',
      name: "Chat",
      component: Chat
  },
  {
    path: '/user',
    name: "User",
    component: User
  },
  {
    path: '/user/create',
    name: "UserCreate",
    component: UserCreate
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router