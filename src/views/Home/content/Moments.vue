<template>
  <div class="moments">
    <div class="header">
      <p class="title">Captured Moments</p>
    </div>

    <div data-aos="fade-up">
      <div class="options">
        <div
          v-for="(item, index) in actions"
          :key="index"
          class="option"
          @click="checkTypeImg(item.type)"
          :class="(item.type === filter ? 'action' : '')"
        >{{ item.text }}</div>
      </div>

      <masonry
        :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
        :gutter="{default: '30px', 700: '15px'}"
        class="masonry--wrapper"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="masonry-image--wrapper"
        >
          <img :src="item.img" alt="" class="masonry-image">
        </div>
      </masonry>
    </div>
  </div>
</template>

<script>
export default {
  name: "moments",
  data() {
    return {
      actions: [
        {
          type: "all",
          text: "ALL PHOTOS"
        },
        {
          type: "Engagement",
          text: "Engagement"
        },
        {
          type: "Wedding",
          text: "Pre-Wedding"
        },
        {
          type: "Friends",
          text: "With Friends"
        }
      ],
      list_img: [
        {
          type: 1,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery5-540x737.jpg",
          category: "Engagement"
        },
        {
          type: 0,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery6-540x398.jpg",
          category: "Engagement"
        },
        {
          type: 0,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery4.jpg",
          category: "Engagement"
        },
        {
          type: 1,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery8.jpg",
          category: "Wedding"
        },
        {
          type: 1,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery7.jpg",
          category: "Wedding"
        },
        {
          type: 0,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery2.jpg",
          category: "Friends"
        },
        {
          type: 1,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery1.jpg",
          category: "Friends"
        },
        {
          type: 0,
          img:
            "http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/gallery3.jpg",
          category: "Friends"
        }
      ],
      filter: "all",
      list: []
    }
  },
  watch: {
    filter: function(type) {
      this.list = this.list_img
      if (type === "Engagement")
        this.list = this.list_img.filter(el => el.category === "Engagement")
      if (type === "Wedding")
        this.list = this.list_img.filter(el => el.category === "Wedding")
      if (type === "Friends")
        this.list = this.list_img.filter(el => el.category === "Friends")
    }
  },
  mounted() {
    this.list = this.list_img
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
  margin-bottom: 60px;
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

  .masonry--wrapper {
    justify-content: center;
  }

  .masonry-image {
    width: 100%;
    &--wrapper {
      margin-bottom: 20px;
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
    margin: 60px auto;
  }
}
</style>