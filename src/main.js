import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible';
import axios from 'axios';
import setAxios from './setaxios';
import { nextTick } from 'q'
setAxios()
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
router.beforeEach((to, from, next) => {
  store.commit("setToken", localStorage.getItem('token'));
  if (to.meta.isLogIn) {
    if (store.state.token) { 
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }

  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
