import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  show: true
}

const mutations = {
  SHOW(state, show) {
    state.show = show
  }
}

const actions = {
  show(context, show) {
    context.commit('SHOW', show)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
