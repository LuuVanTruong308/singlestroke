<template>
  <div class="row moments">
    <div class="header">
      <p class="title">Captured Moments</p>
    </div>

    <div v-if="moment" data-aos="fade-up">
      <div class="options">
        <div
          v-for="(item, index) in moment.actions"
          :key="index"
          class="option"
          @click="checkTypeImg(item.type)"
          :class="(item.type === filter ? 'action' : '')"
        >{{ item.text }}</div>
      </div>

      <div class="list-img">
        <div
          v-for="(item, index) in list"
          :key="index"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
          :class="(item.type === 0 ? 'small' : 'big')"
          class="img"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "moments",
  data() {
    return {
      filter: "all",
      list: []
    }
  },

  props: {
    moment: {
      type: Object,
      default: () => {}
    }
  },

  watch: {
    filter: function(type) {
      this.list = this.moment.list_img
      if (type === "Engagement")
        this.list = this.moment.list_img.filter(el => el.category === "Engagement")
      if (type === "Wedding")
        this.list = this.moment.list_img.filter(el => el.category === "Wedding")
      if (type === "Friends")
        this.list = this.moment.list_img.filter(el => el.category === "Friends")
    }
  },

  created() {
    this.list = this.moment.list_img
    console.log('list moment', this.list)
  },

  methods: {
    checkTypeImg(type) {
      this.filter = type
    }
  }
}
</script>
<style lang="scss" scoped>
.moments {
  width: auto;
  height: 850px;
  background-size: cover;

  .header {
    font-size: 14px;
    line-height: 1.85;
    color: #888;
    text-align: center;
    margin-top: 100px;

    .title {
      color: #dcc8b4;
      font-family: "Alex Brush";
      font-weight: normal;
      font-size: 400%;
      line-height: 0;
      letter-spacing: 0;
    }
  }

  .options {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    .option {
      margin: 0.25em 1em;
      padding: 0.25em 0;
      border-bottom: 2px solid transparent;
      color: #888;
      font-size: 12px;
      font-style: italic;
      line-height: inherit;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
    }

    .action {
      border-bottom: 2px solid #b4d2c8;
    }
  }

  .list-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    max-height: 600px;

    @for $i from 1 through 36 {
      img:nth-child(#{$i}) {
        $h: (random(355) + 180) + px;
        height: $h;
      }
    }

    .img {
      width: 250px;
      background-size: cover;
      margin: 15px;
    }

    .small {
      height: 180px;
    }

    .big {
      height: 355px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .moments {
    width: 1170px;
    margin: 0 auto;
  }
}
</style>