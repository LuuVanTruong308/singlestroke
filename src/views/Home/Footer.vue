<template>
  <div v-if="dataFooter" class="home-footer" :style="{ backgroundImage: 'url(' + dataFooter.backgroup + ')' }">
    <img :src="dataFooter.img" class="preloader-content">
    <p class="text">Copyright © {{ new Date().getFullYear() }} — designed by ToiLDA</p>
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

  .preloader-content {
    position: relative;
    display: inline-block;
    max-height: 60vh;
    vertical-align: middle;
    width: auto;
    height: auto;
    padding-top: 200px;
  }

  .text {
    margin-top: 60px;
    font-style: italic;
    font-size: 12px;
  }
  @media screen and (max-width: 519px){
    background-position: 30% 50%;
  }
}
</style>
