import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count';
import products from './modules/products';
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    count,
    products,
  }
})
