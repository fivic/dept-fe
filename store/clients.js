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
    const data = await this.$axios.get('https://randomuser.me/api/?results=300')
    const filteredData = data.data.results
      .filter((el) => {
        const offsetMinutes = this.$filters.offsetToMinutes(
          el.location.timezone.offset
        )
        if (
          el.id.value &&
          el.location.city &&
          el.dob.age >= 18 &&
          offsetMinutes >= -60 &&
          offsetMinutes <= 60
        )
          return true
        else return false
      })
      .slice(0, 14)
    commit('setClients', filteredData)
  },
}

export const getters = {
  getAll: (state) => {
    return state.all
  },
}
