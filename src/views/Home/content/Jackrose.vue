<template>
  <div class="waper-jackrose">
    <div class="jackrose">
      <div>
        <img :src="imgJack">
        <div class="name">Jack {{ nameJack }}</div>
      </div>
      <div class="img-and">
        <img :src="imgAnd">
      </div>
      <div>
        <img :src="imgRose">
        <div class="name">Rose {{ nameRose }}</div>
      </div>
    </div>

    <div class="are-getting-married">
        <p class="title">Are getting married</p>
        <p>{{ time }} - {{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jackrose',
  components: {
  },

  data() {
    return {
      imgAnd: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/intro-separator.png',
      nameJack: '123 123',
      imgJack: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/intro-groom.png',
      nameRose: '234 234',
      imgRose: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/intro-bride.png',
      location: 'Bali, Indonesia',
      time: '14 February, 2016'
    }
  },
}
</script>

<style lang="scss" scoped>
.waper-jackrose {
  margin: 100px 0;

  .jackrose {
    display: flex;
    justify-content: center;
    height: 310px;
    margin-bottom: 60px;

    .img-and {
      width: 160px;
      height: 100px;
      margin-top: 65px;
    }
  }

  .are-getting-married {
    font-size: 14px;
    line-height: 1.85;
    color: #888;

    .title {
      color: #dcc8b4;
      font-family: "Alex Brush";
      font-weight: normal;
      font-size: 400%;
      line-height: 0;
      letter-spacing: 0;
    }
  }
}
</style>
