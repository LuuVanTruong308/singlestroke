<template>
  <div class="wrapper-jackrose">
    <div data-aos="fade-up">
      <div class="jackrose">
        <div>
          <img :src="imgGroome">
          <div class="name"> {{ nameJack }}</div>
        </div>
        <div class="img-and">
          <img :src="imgAnd">
        </div>
        <div>
          <img :src="imgBrigde">
          <div class="name">{{ nameRose }}</div>
        </div>
      </div>

      <div class="header">
        <p class="title">Are getting married</p>
        <p>{{ time }} - {{ location }}</p>
      </div>
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
      nameJack: 'Jack WILSON',
      imgGroome: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/intro-groom.png',
      nameRose: 'Rose MARIE',
      imgBrigde: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/intro-bride.png',
      location: 'Bali, Indonesia',
      time: '14 February, 2016'
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper-jackrose {
  margin: 100px 0;
  text-align: center;

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

    .name {
      margin-top: 20px;
      font-style: italic;
      font-weight: 400;
      color: #888888;
      font-size: 20px;
      text-transform: uppercase;
    }
  }

  .header {
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
