<template>
  <div class="carousel--wrapper">
    <Carousel :sliders="quote" class="carousel"/>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Quote",

  components: {
    Carousel
  },

  props: {
    quote: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
