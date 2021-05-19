<template>
  <div class="">
    <div class="absolute w-full"></div>
    <div class="w-full pt-2 px-2 text-black">
      <NuxtLink to="/"
        ><VIcon
          icon="arrow-circle-left"
          class="fill-current text-black"
          xl
        ></VIcon
      ></NuxtLink>
      <div
        v-if="client"
        class="border border-gray-200 mt-24 px-4 pb-10 bg-gray-200 rounded-md"
      >
        <div class="flex flex-col items-center pb-6 -mt-24 space-y-2">
          <img :src="client.picture.large" class="rounded-full w-48 h-48" />
          <span class="font-bold text-2xl">{{ getName }}</span>
        </div>

        <div class="space-y-2 flex flex-col font-semibold">
          <div class="flex space-x-2">
            <VIcon icon="cake"></VIcon>
            <span>{{ client.dob.date }}</span>
          </div>
          <div class="flex space-x-2">
            <VIcon icon="location-marker"></VIcon>
            <span>{{
              client.location.city + ', ' + client.location.country
            }}</span>
          </div>
          <div class="flex space-x-2">
            <VIcon icon="mail"></VIcon>
            <a :href="`mailto:${client.email}`">{{ client.email }}</a>
          </div>
          <div class="flex space-x-2">
            <VIcon icon="phone"></VIcon>
            <a :href="`tel:${client.phone}`">{{ client.phone }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/VIcon'
export default {
  components: {
    VIcon,
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
