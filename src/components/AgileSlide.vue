<template>
  <div>
    <agile
      :mobileFirst="true"
      :slidesToShow="1"
      fade="fade"
      :navButtons="false"
      :autoplay="false"
      :autoplaySpeed="20000"
    >
      <div
        v-for="(slide, index) in listImageSlider"
        :key="index"
        class="slide"
      >
        <div
          class="slide_img"
          :style="{ backgroundImage: 'url(' + require(`@/assets/images/slider/${slide.img}`) + ')' }"
        ></div>
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
      listImageSlider: [
        {
          id: 1,
          img : 'slider3.png'
        },
        {
          id: 2,
          img : 'slider2.png'
        },
        {
          id: 3,
          img : 'slider4.png'
        },
        {
          id: 4,
          img : 'slider1.png'
        }
      ]
    }
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
.slide_img {
  width: 100%;
  height: 100vh;
  background-position: -108% 30%;
  background-size: cover;
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

  @media screen and (max-width: 575px) {
    width: 100% !important;
  }
}
</style>
