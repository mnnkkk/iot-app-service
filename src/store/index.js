import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'en'
  },
  mutations: {
    switchLanguage (state, selectedLanguage) {
      // console.log('mutations: switchLanguage to ' + selectedLanguage)
      state.language = selectedLanguage
    }
  },
  actions: {
  },
  modules: {
  }
})
