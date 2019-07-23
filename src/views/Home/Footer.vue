<template>
<!-- dataFooter.backgroup -->
  <div v-if="dataFooter" class="home-footer" :style="{ backgroundImage: 'url(' + require(`@/assets/images/footer/footer.png`) + ')' }">
    <img :src="require(`@/assets/${dataFooter.img}`)" class="preloader-content">
    <p class="text">Bản quyền © {{ new Date().getFullYear() }} — thuộc về <a href="vuquy.vn" style="color: #FFF">Vuquy.vn</a></p>
    <div class="footer-overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  components: {
  },

  props: {
    dataFooter : {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.home-footer {
  color: #e5e5e5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-color: #ffffff;
  text-align: center;
  height: 525px;
  background-position: center center;
  position: relative;

  .preloader-content {
    position: relative;
    display: inline-block;
    max-height: 60vh;
    vertical-align: middle;
    width: 300px;
    padding-top: 100px;
    z-index: 2;
  }

  .text {
    margin-top: 60px;
    font-style: italic;
    font-size: 12px;
    z-index: 2;
    color: #ffffff;
    position: relative;
  }
}

.footer-overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba($color: #000000, $alpha: .5)
}
</style>
