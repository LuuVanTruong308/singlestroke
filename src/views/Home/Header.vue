<template>
  <div class="masthead">
    <div class="masthead--wrapper" style="background-color: #b4d2c8; height: 100vh">
      <div class="masthead-image">
        <img
          width="400"
          height="400"
          src="http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero-logo.png"
          class="attachment-full size-full"
          alt="Jack &amp; Rose"
        >
      </div>
      <!-- <div class="carousel--wrapper">
        <Carousel :sliders="dataHeader.list_img_header" :image="true" class="carousel"/>
      </div> -->
      <div class="masthead-action">
        <a href="#navbar" class="masthead-button anchor-link">
          <span>Enter Site</span>
          <i class="fas fa-angle-double-down"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import Carousel from "@/components/Carousel";

export default {
  name: "Header",

  // components: {
  //   Carousel
  // },

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
    // position: relative;
    height: 100%;
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

.masthead-image {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 90%;
}
.masthead img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 60vh;
}
.masthead-action {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;
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
</style>
