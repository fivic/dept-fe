<template>
  <div class="px-5 flex flex-col text-green-900 min-h-screen h-full">
    <div class="py-5 grid place-content-center">
      <input
        v-model="search"
        class="
          p-2
          w-full
          border border-gray-400
          rounded-lg
          outline-none
          focus:ring-1 focus:ring-green-400
          text-lg
          font-semibold
        "
        type="text"
        placeholder="Search"
      />
    </div>
    <transition-group
      name="fade"
      class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3"
    >
      <div
        v-for="client in filteredClients"
        :key="client.email"
        class="duration-300 ease-in-out"
      >
        <NuxtLink :to="`details/${client.id.value}`">
          <div class="rounded-xl h-32 flex overflow-hidden shadow-lg">
            <VImage :img-url="client.picture.large" class="w-2/5"></VImage>
            <div class="p-5 font-semibold text-xl bg-green-400 w-3/5">
              <p>{{ client.name.title }} {{ client.name.first }}</p>
              <p>{{ client.name.last }}</p>
            </div>
          </div>
        </NuxtLink>
      </div></transition-group
    >
  </div>
</template>

<script>
import _includes from 'lodash/includes'
import VImage from '@/components/VImage'

export default {
  components: {
    VImage,
  },
  data() {
    return { search: '' }
  },
  computed: {
    clients() {
      return this.$store.getters['clients/getAll']
    },
    filteredClients() {
      if (this.search === '' || this.search === undefined) return this.clients

      const self = this
      return this.clients.filter((item) => {
        return (
          _includes(
            item.name.first.toLowerCase(),
            self.search.toString().toLowerCase()
          ) ||
          _includes(
            item.name.last.toLowerCase(),
            self.search.toString().toLowerCase()
          ) ||
          _includes(
            item.name.title.toLowerCase(),
            self.search.toString().toLowerCase()
          )
        )
      })
    },
  },
  async mounted() {
    if (!this.clients.length) {
      await this.$store.dispatch('clients/fetchAll')
    }
  },
}
</script>

<style></style>
