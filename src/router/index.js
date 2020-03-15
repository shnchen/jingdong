import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login.vue';
import Register from '../views/register.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Login',redirect:'/login'},
  {path: '/register',name: 'Register',component: Register},
  {path: '/login',name: 'Login',component: () => import('../views/login.vue')},
  {path: 
    '/bottom-nav',
     name: 'BottomNav',
      component: () => import('../views/bottom-nav.vue'),
      redirect:'/bottom-nav/index',
      children:[
        {path: 'index', name: 'Index', component: () => import('../views/index.vue')},
        {path: 'list', name: 'List', component: () => import('../views/list.vue')},
        {path: 'search', name: 'Search', component: () => import('../views/search.vue')},
        {path: 'cart', name: 'Cart', component: () => import('../views/cart.vue'),meta:{isLogIn:true}},
        {path: 'mine', name: 'Mine', component: () => import('../views/mine.vue'),meta:{isLogIn:true}},
      ]
    },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
