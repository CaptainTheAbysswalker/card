import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: {
      subject: ' ',
      messageText: ''
    }
  },
  mutations: {
    saveMessage(state, messageText){
      state.message = messageText
    }
  },
  actions: {
    saveMessage(context, messageText){
      context.commit('saveMessage', messageText)
    }
  },
  modules: {
  }
})
