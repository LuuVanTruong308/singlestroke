<template>
  <div class="moments">
    <div class="header">
      <p class="title">Khoảnh khắc của chúng tôi</p>
    </div>

    <div data-aos="fade-up">
      <masonry
        :cols="{default: 4, 1170: 3, 768: 2, 460: 1}"
        :gutter="{default: '30px', 700: '15px'}"
        class="masonry--wrapper"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="masonry-image--wrapper"
        >
          <img :src="require(`@/assets/gallery/${item.img}`)" alt="" class="masonry-image">
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
      list_img: [
        {
          type: 1,
          img: "gallery-1.png",
        },
        {
          type: 0,
          img: "gallery-8.png"
        },
        {
          type: 0,
          img: "gallery-3.png"
        },
        {
          type: 1,
          img: "gallery-4.png"
        },
        {
          type: 1,
          img: "gallery-5.png"
        },
        {
          type: 0,
          img: "gallery-6.png"
        },
        {
          type: 1,
          img: "gallery-7.png"
        },
        {
          type: 0,
          img: "gallery-2.png"
        }
      ],
      filter: "all",
      list: []
    }
  },
  mounted() {
    this.list = this.list_img
  }
}
</script>
<style lang="scss" scoped>
.moments {
  margin-bottom: 60px;
  background-size: cover;
  overflow: hidden;
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
      line-height: 30px;
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

@media screen and (max-width: 519px){
  .moments {
    .header {
      .title {
        font-size: 300%;
        line-height: inherit;
      }
    }

    .masonry--wrapper {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>