<template>
  <img
    :src="imgLoader"
    :class="{
      'w-full': wfull,
      'rounded-full': rounded,
      'h-24': sm,
      'h-32': md || (!sm && !lg && !xl),
      'h-48': lg,
      'h-64': xl,
    }"
    :alt="alt"
  />
</template>

<script>
export default {
  name: 'VImage',
  props: {
    /** Image name, jpg file in '/assets/img/' */
    img: {
      type: String,
      default: '360',
    },
    /** Image URL */
    imgUrl: {
      type: String,
      default: null,
    },
    /** Rounded image */
    rounded: {
      type: Boolean,
      default: false,
    },
    /** Component takes full container width */
    wfull: {
      type: Boolean,
      default: false,
    },
    /** Small size */
    sm: {
      type: Boolean,
      default: false,
    },
    /** Medium size */
    md: {
      type: Boolean,
      default: false,
    },
    /** Large size */
    lg: {
      type: Boolean,
      default: false,
    },
    /** Extra large size */
    xl: {
      type: Boolean,
      default: false,
    },
    /** Image alt text */
    alt: {
      type: String,
      default: null,
    },
  },
  computed: {
    imgLoader() {
      if (this.imgUrl) return this.imgUrl
      return require(`@/assets/img/${this.img}.jpg`)
    },
  },
}
</script>

<style></style>
