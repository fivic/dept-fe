<template>
  <div>
    <div class="absolute w-full"></div>
    <div class="w-full pt-2 px-2 flex flex-col">
      <NuxtLink to="/"
        ><VIcon icon="arrow-circle-left" class="fill-current" lg></VIcon
      ></NuxtLink>
      <div
        v-if="client"
        class="
          border border-gray-200
          mt-24
          px-4
          pb-10
          bg-green-400
          rounded-md
          w-full
          sm:w-4/5
          md:w-3/5
          lg:w-2/5
          xl:w-1/3
          self-center
        "
      >
        <div class="flex flex-col items-center pb-6 -mt-24 space-y-2">
          <VImage :img-url="client.picture.large" rounded lg></VImage>
          <span class="font-bold text-2xl">{{ getName }}</span>
        </div>

        <div class="space-y-2 flex flex-col font-semibold">
          <div class="flex space-x-2">
            <VIcon icon="cake" :text="client.dob.date">
              <span class="text-green-900">{{ client.dob.date }}</span>
            </VIcon>
          </div>
          <div class="flex space-x-2">
            <VIcon icon="location-marker" text="">
              <span class="text-green-900">{{
                client.location.city + ', ' + client.location.country
              }}</span></VIcon
            >
          </div>
          <div class="flex space-x-2">
            <VIcon icon="mail">
              <a :href="`mailto:${client.email}`" class="text-green-900">{{
                client.email
              }}</a></VIcon
            >
          </div>
          <div class="flex space-x-2">
            <VIcon icon="phone">
              <a :href="`tel:${client.phone}`" class="text-green-900">{{
                client.phone
              }}</a></VIcon
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/VIcon'
import VImage from '@/components/VImage'
export default {
  components: {
    VIcon,
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
  },
}
</script>

<style></style>
