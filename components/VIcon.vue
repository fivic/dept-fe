<template>
  <div class="flex items-center">
    <component
      :is="svgLoader"
      :class="{
        'w-full': wfull,
        'h-4 w-4': sm,
        'h-6 w-6': md || (!sm && !lg && !xl),
        'h-8 w-8': lg,
        'h-10 w-10': xl,
      }"
    >
    </component>
  </div>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    /** Icon name, svg file in '/assets/svg' */
    icon: {
      type: String,
      default: 'logo',
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
  },
  computed: {
    svgLoader() {
      return () => import(`@/assets/svg/${this.icon}.svg?inline`)
    },
  },
}
</script>

<style></style>
