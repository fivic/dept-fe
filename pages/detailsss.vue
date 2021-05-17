<template>
  <div>
    <div class="w-full border border-black p-2">
      <NuxtLink to="/"><div class="bg-black w-6 h-6"></div></NuxtLink>
      <div class="border border-black mt-4 p-2">
        <VImage img="rainbow" sm></VImage>
        <p class="font-semibold">Mrs Jane Doe</p>
        <div class="mt-2">
          <p>Date of birth</p>
          <p>Place of residence</p>
          <p>E-mail</p>
          <p>Phone number</p>
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
      client: [],
    }
  },
  async mounted() {
    const clientData = await this.$axios.get('https://randomuser.me/api/')
    console.log(clientData.data.results[0])
  },
}
</script>

<style></style>
