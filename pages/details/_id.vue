<template>
  <div>
    <div class="w-full border border-black p-2">
      <NuxtLink to="/"><div class="bg-black w-6 h-6"></div></NuxtLink>
      <div v-if="client" class="border border-black mt-4 p-2">
        <VImage img="rainbow" md></VImage>
        <p class="font-bold">{{ getName }}</p>
        <div class="mt-2">
          <p>
            <span class="font-semibold">Date of birth</span>:
            {{ client.dob.date }}
          </p>
          <p>
            <span class="font-semibold">Place of residence</span>:
            {{ client.location.city + ', ' + client.location.country }}
          </p>
          <p>
            <span class="font-semibold">E-mail</span>:
            <a :href="`mailto:${client.email}`">{{ client.email }}</a>
          </p>
          <p>
            <span class="font-semibold">Phone number</span>:
            <a :href="`tel:${client.phone}`">{{ client.phone }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from '@/components/VImage'
export default {
  components: {
    VImage,
  },
  data() {
    return {
      client: null,
    }
  },
  computed: {
    getName() {
      return `${this.client.name.title} ${this.client.name.first} ${this.client.name.last}`
    },
  },
  async mounted() {
    this.client = await this.$store.getters['clients/getAll'].find(
      (el) => el.id.value === this.$route.params.id
    )
    console.log('this.client', this.client)
  },
}
</script>

<style></style>
