<template>
  <div class="align-center-giftRegistry">
    <div class="header">
      <p class="title">{{ title }}</p>
    </div>
    <div v-if="giftRegistry" data-aos="fade-up">
      <p class="des">{{ giftRegistry.des[0] }} <br> {{ giftRegistry.des[1]}} </p>
      <div class="icons">
        <div v-for="(icon, index) in giftRegistry.icons" :key="index" class="icon" :style="{ backgroundImage: 'url(' + icon + ')' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { titleDiftRegistry } from './const'
export default {
  name: 'giftRegistry',

  props: {
    giftRegistry: {
      type:  Object,
      default: () => {}
    }
  },

  created() {
    this.title = titleDiftRegistry
  }
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
      font-family: "Dancing Script";
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

@media screen and (max-width: 519px){
  .align-center-giftRegistry {
    .header {
      .title {
        font-size: 300%;
      }
    }
  }
}
</style>
