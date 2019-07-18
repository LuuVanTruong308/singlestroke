<template>
  <div>
    <agile
      :mobileFirst="true"
      :slidesToShow="1"
      :navButtons="false"
      :autoplay="true"
      :autoplaySpeed="20000"
      :option="Options"
    >
      <div class="slide" v-for="(slide, index) in listImageSlider" :key="index">
        <img :src="slide.img" alt>
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile
  },
  props: {
    sliders: {
      type: Array
    }
  },
  data() {
    return {
      Options: {},
      listImageSlider: [
        {
          id: 1,
          img : '@/assets/images/slider/alider1.png'
        },
        {
          id: 2,
          img : '@/assets/images/slider/alider2.png'
        },
        {
          id: 3,
          img : '@/assets/images/slider/alider3.png'
        }
      ]
    }
  },

  created() {
    console.log(this.sliders)
  }
}
</script>

<style lang="scss">
.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 15px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 15px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}
.slide {
  display: block;
  height: 100vh;
  object-fit: cover;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
