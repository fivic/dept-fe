<template>
  <div>
    <NuxtLink to="/"
      ><div class="sticky top-0 border-b border-black py-4 w-full bg-white">
        <VIcon wfull icon="logo"></VIcon>
      </div>
    </NuxtLink>
    <Nuxt />
  </div>
</template>

<script>
import VIcon from '@/components/VIcon'
export default {
  components: {
    VIcon,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
