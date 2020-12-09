import Vue from "vue"
import Vuex, { Store } from "vuex"
import createPersistedstate from "vuex-persistedstate"

Vue.use(Vuex)

export default new Store({
  state: {
    isDarkMode: true
  },
  plugins: [createPersistedstate({
    paths: ["isDarkMode"]
  })],
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode
    }
  }
})