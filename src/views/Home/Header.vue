<template>
  <div class="masthead">
    <div class="masthead--wrapper">
      <div class="masthead-image">
        <img
          width="400"
          height="400"
          src="@/assets/hero-logo.png"
          class="attachment-full size-full"
          alt="Jack &amp; Rose"
        >
      </div>
      <div class="masthead-action">
        <a href="#navbar" class="masthead-button anchor-link">
          <span>Enter Site</span>
          <i class="fas fa-angle-double-down"></i>
        </a>
      </div>
    </div>

    <div v-if="dataHeader" class="masthead-carousel">
      <agile-slider :sliders="dataHeader.list_img_header" />
    </div>
    <div class="hero-slide-overlay"></div>
  </div>
</template>

<script>
import AgileSlider from '@/components/AgileSlide'

export default {
  name: "Header",
  components: {
    AgileSlider
  },
  props: {
    dataHeader: {
      type: Object,
      default: () => {}
    }
  },
}
</script>
<style lang="scss" scoped>
.masthead {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  text-align: center;

  &--wrapper {
    height: 100%;
    background-color: #b4d2c8;
    height: 100vh;
    &::before {
      content: "";
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
    &::after {
      clear: both;
      content: "";
      display: table;
    }
  }
}

.hero-slide-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(130, 160, 150, 0.3);
}

.masthead-image {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 90%;
  z-index: 99;

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 60vh;
  }
}

.masthead-action {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 99;
}
.masthead-button {
  display: inline-block;
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  font-style: italic;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: jackrose-hero-button 2s ease-in-out 0s infinite;
}
.masthead-button span {
  display: block;
}
.masthead-button .fa {
  display: block;
  margin-top: 5px;
  font-size: 20px;
  font-style: normal;
}

@keyframes jackrose-hero-button {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -30px);
  }
}
.masthead-button {
  display: inline-block;
  font-size: 12px;
  font-style: italic;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: jackrose-hero-button 2s ease-in-out 0s infinite;
}
.masthead-carousel {
  margin-top: -100vh;
  height: 100vh;
  width: 100vw;
}
</style>
