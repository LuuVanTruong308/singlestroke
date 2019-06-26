<template>
  <div class="carousel--wrapper">
    <Carousel :sliders="data" class="carousel"/>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Quote",

  components: {
    Carousel
  },

  props: {},
  data() {
    return {
      data: [{
        id: 1,
        quote: 'Tình yêu chân chính không bị mài mòn bởi thời gian, cũng không thể đổi thay bởi hoàn cảnh',
        author: ''
      },
      {
        id: 2,
        quote: 'Người hiểu tình yêu, cả đời chỉ yêu một lần. Kẻ yêu năm lần bảy lượt, thích mới chán cũ, chỉ là kẻ đùa giỡn với tình yêu.',
        author: ''
      },
      {
        id: 3,
        quote: 'Tình yêu chân chính không bị mài mòn bởi thời gian, cũng không thể đổi thay bởi hoàn cảnh',
        author: ''
      },]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
