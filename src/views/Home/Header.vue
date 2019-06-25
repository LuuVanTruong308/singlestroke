<template>
  <div class="header-logo">
    <div class="wrapper" style="background-color: #b4d2c8; height: 100vh">
      <div class="header-logo-image">
        <img
          width="400"
          height="400"
          src="http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero-logo.png"
          class="attachment-full size-full"
          alt="Jack &amp; Rose"
        >
      </div>
      <div class="header-action">
        <a href="#intro" class="header-button anchor-link">
          <span>Enter Site</span>
          <i class="fas fa-angle-double-down"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    dataHeader: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.header-logo {
  // position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  // padding: 70px 0;
}

.header-logo .wrapper {
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
.header-logo-image {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 90%;
}
.header-logo img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 60vh;
}
.header-action {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;

  .header-button {
    display: inline-block;
    font-size: 12px;
    font-style: italic;
    line-height: 20px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    animation: jackrose-hero-button 2s ease-in-out 0s infinite;
    text-decoration: none;
    color: white;

    span {
      display: block;
    }

    .fa {
      display: block;
      margin-top: 5px;
      font-size: 20px;
      font-style: normal;
    }
  }
}

@keyframes jackrose-hero-button {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -30px);
  }
}
.hero-button {
  display: inline-block;
  font-size: 12px;
  font-style: italic;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  -webkit-animation: jackrose-hero-button 2s ease-in-out 0s infinite;
  -moz-animation: jackrose-hero-button 2s ease-in-out 0s infinite;
  -o-animation: jackrose-hero-button 2s ease-in-out 0s infinite;
  animation: jackrose-hero-button 2s ease-in-out 0s infinite;
}
</style>
