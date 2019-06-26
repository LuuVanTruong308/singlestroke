<template>
  <div>
    <carousel
      :per-page="1"
      :loop="true"
      :centerMode="true"
      :touchDrag="true"
    >
      <slide v-for="slide in sliders" :key="slide.id">
        <div v-if="!image"> {{ slide.quote }} </div>
        <img v-else :src="slide.img">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    sliders: {
      type: Array
    },

    image:  {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss">
.carousel--wrapper {
  background-image: url('../assets/quote.jpg') !important;
  background-position: center center;
  background-size: cover;
}
.VueCarousel-slide {
  font-size: 175%;
  font-style: italic;
  color: #ffffff;
}
.carousel {
  justify-content: center;
  display: flex;
  text-align: center;
  padding: 120px 0;
}
.VueCarousel-dot {
  background-color: transparent !important;
  border: 2px solid #ffffff !important;
  padding: 2px !important;
  margin-right: 10px;
  &--active {
    background-color: #ffffff !important;
    outline: none !important;
  }
}
</style>
