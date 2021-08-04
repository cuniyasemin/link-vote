import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : [],
    submitClicked: false,
    sortBy: 'null'
  },
  mutations: {
    submitClicked (state, clicked) {
      state.submitClicked = clicked
    },
    addLink (state, link) {
      state.links.push(link)
      localStorage.setItem('links', JSON.stringify(state.links))
    },
    upVote (state, link) {
      link.points++
      localStorage.setItem('links', JSON.stringify(state.links))
    },
    downVote (state, link) {
      link.points--
      localStorage.setItem('links', JSON.stringify(state.links))
    },
    update_sorting (state, sorting) {
      state.sortBy = sorting
    },
    remove (state, link) {
      state.links.pop(link)
      localStorage.setItem('links', JSON.stringify(state.links))
    }
  },
  actions: {

  }
})
