export const state = () => ({
  all: [],
})

export const mutations = {
  setClients(state, items) {
    state.all = items
  },
}

export const actions = {
  async fetchAll({ commit }) {
    const data = await this.$axios.get('https://randomuser.me/api/?results=50')
    const cleanData = data.data.results.filter(
      (el) => el.id.value && el.location.city
    )
    commit('setClients', cleanData)
  },
}

export const getters = {
  getAll: (state) => {
    return state.all
  },
}
