import Vue from "vue"
import Vuex from "vuex"

import { createPersistedState, createSharedMutations } from "vuex-electron"

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    preferences: {
      api_token: 'scoot'
    }
  },

  actions: {
    setToken(store, token) {
        store.commit('setToken', token)
    }
  },

  mutations: {
    setToken(state, token) {
      state.preferences.api_token = token
    }
  },

  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],

  strict: process.env.NODE_ENV !== "production"
})
