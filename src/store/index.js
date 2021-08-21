import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },

    mutations: {
      SET_COUNT(state, data) {
        state.count = data;
      }
    },

    actions: {
      setCount ({ commit }, payload) {
        commit('SET_COUNT', payload);
      }
    },

    modules
  })
}
