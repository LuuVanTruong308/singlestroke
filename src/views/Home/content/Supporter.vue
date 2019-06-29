<template>
  <div class="suport">
    <div v-for="(item, index) in support" :key="index" class="wrapper-support">
      <div class="header">
        <p class="title">{{ item.title }}</p>
      </div>
      <div class="list-image">
        <div v-for="(image, index) in item.images" :key="index" class="image-name">
          <div data-aos="fade-up">
            <img :src="image.img" :alt="image.name" class="image">
            <p class="name">{{ image.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'suport',

  props: {
    support: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.suport {
  margin: 50px 0;

  .wrapper-support {
    padding: 50px 0 25px 0;

    .header {
      font-size: 14px;
      line-height: 1.85;
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

    .list-image {
      display: flex;
      justify-content: center;

      .image-name {
        margin: 20px;
        text-align: center;
        font-size: 14px;
      }

      .name {
        font-size: 16px;
        text-transform: uppercase;
        font-style: italic;
        color: #888;
      }
    }
  }
}
</style>
