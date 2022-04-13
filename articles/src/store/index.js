import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{},
    api_url:'Https://conduit.productionready.Io/api',
  },
  getters: {
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
