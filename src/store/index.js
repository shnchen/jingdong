import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cartArray: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    addGoods(state, goodses) {
      let goods = state.cartArray.find(item => item.title === goodses.title);
      if (goods) {
        goods.count += 1
      } else {
        state.cartArray.push({
          title: goodses.title,
          count: 1
        })
      }
    },
    removeCartArray(state,goods){
      state.cartArray.forEach((item,index)=>{
        if(item.title ===goods.title  ){
          if(item.count>1){
            item.count --;
          }else{
            state = state.cartArray.splice(index,1)
          }
         
        }
      })
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    countSum: state => {
      let num = 0;
      state.cartArray.forEach(item => {
        num += item.count;
      });
      return num;
    }
  }
})
