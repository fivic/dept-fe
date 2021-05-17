export const state = () => ({
  all: [],
})

export const mutations = {
  setClients(state, items) {
    console.log(items)
    state.all = items
  },
}

export const actions = {
  async fetchAll({ commit }) {
    const data = await this.$axios.get('https://randomuser.me/api/?results=50')
    commit('setClients', data.data.results)
  },
}

export const getters = {
  getAll: (state) => {
    console.log('getAll', state.all)
    return state.all
  },
}
