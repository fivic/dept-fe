<template>
  <div class="p-5 flex flex-col space-y-6">
    <div v-for="client in clients" :key="client.email" class="">
      <NuxtLink :to="`details/${client.id.value}`">
        <div
          class="
            border border-gray-300
            rounded-xl
            h-32
            flex
            overflow-hidden
            shadow-md
          "
        >
          <!-- <VImage img="rainbow" class="w-2/5"></VImage> -->
          <img :src="client.picture.large" />
          <div class="p-5 font-semibold text-xl">
            <p>{{ client.name.title }} {{ client.name.first }}</p>
            <p>{{ client.name.last }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import VImage from '@/components/VImage'
export default {
  components: VImage,
  computed: {
    clients() {
      return this.$store.getters['clients/getAll']
    },
  },
  async mounted() {
    if (!this.clients.length) {
      console.log('tu smo')
      await this.$store.dispatch('clients/fetchAll')
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
