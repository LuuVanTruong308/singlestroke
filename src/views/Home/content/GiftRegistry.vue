<template>
  <div class="align-center-giftRegistry">
    <div class="header">
      <p class="title">{{ title }}</p>
    </div>

    <p class="des">{{ des[0] }} <br> {{des[1]}} </p>
    <div class="icons">
      <div v-for="(icon, index) in icons" :key="index" class="icon" :style="{ backgroundImage: 'url(' + icon + ')' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'giftRegistry',
  components: {
  },

  data() {
    return {
      title: 'Gift Registry',
      des: [
        " We're simply grateful for your presence to celebrate the occasion with us!",
        "If you would like to get us something, we'd love that too... we are registered at here:"
      ],
      icons: [
        'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/logo-bed-bath-and-beyond.png',
        'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/logo-crate-and-barrel.png',
        'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/logo-honeyfund.png',
        'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/logo-newlywish.png',
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.align-center-giftRegistry {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 100px 0;

  .header {
    font-size: 14px;
    line-height: 1.85;
    color: #888;
    text-align: center;

    .title {
      color: #dcc8b4;
      font-family: "Alex Brush";
      font-weight: normal;
      font-size: 400%;
      line-height: 0;
      letter-spacing: 0;
    }
  }

  .des {
    text-align: center;
    font-family: serif;
    font-size: 14px;
    line-height: 1.85;
    color: #888;
  }

  .icons {
    display: flex;
    align-content: space-between;

    .icon {
      width: 170px;
      height: 60px;
      background-size: cover;
      margin: 0 15px;
    }
  }
}
</style>
