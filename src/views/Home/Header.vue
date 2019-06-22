<template>
  <div class="header preloader jackrose-preloader-done">
    <img :src="dataHeader.img" class="preloader-content">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    dataHeader : {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100vh;
  background-color: #b4d2c8;
  top: 0;
  left: 0;
  text-align: center;
  // position: fixed;
}

.preloader-content {
  position: relative;
  display: inline-block;
  max-width: 90%;
  max-height: 60vh;
  vertical-align: middle;
  width: auto;
  height: auto;
  padding: 70px 0;
}
</style>
