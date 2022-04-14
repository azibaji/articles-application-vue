import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{}
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
  },
  actions: {
  },
  modules: {
  }
})
