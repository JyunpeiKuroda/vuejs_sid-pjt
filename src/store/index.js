import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSet: {}
  },
  mutations: {
    mutateDataSet(state, payload) {
      state.dataSet = payload;
    }
  },
  actions: {
    commitDataSet(store) {
      return axios.get('./data/sample.json')
      .then(response => {
        store.commit('mutateDataSet', response.data)
      })
      .catch((reason) => {
        console.log(reason.message)
      })
    }
  },
  getters: {
    getStateDataSet: (state) => state.dataSet
  },
  modules: {
  }
})
