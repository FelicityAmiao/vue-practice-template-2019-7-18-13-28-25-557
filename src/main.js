import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    counterCount: 3
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrease (state) {
      state.count--
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
