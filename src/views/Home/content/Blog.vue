<template>
  <div class="blogs">
    <div class="header">
      <p class="title">Những câu chuyện của chúng tôi</p>
    </div>

    <div data-aos="fade-up">
      <div class="list-blog">
        <div v-for="blog in blogs" :key="blog.id" class="blog">
          <div class="image" :style="{ backgroundImage: 'url(' + require(`@/assets/${blog.img}`) + ')' }"></div>
          <div class="title">{{ blog.title }}</div>
          <div class="des" slot="des"><span v-html="blog.des"></span>{{ blog.des }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'blog',

  props: {
    blogs: {
      type: Array ,
      defaultl: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.blogs {
  background-color: $secondary-color;
  padding: 20px 0 60px 0;

  .header {
    font-size: 14px;
    line-height: 1.85;
    text-align: center;

    .title {
      color: #dcc8b4;
      font-family: "Dancing Script";
      font-weight: normal;
      font-size: 400%;
      line-height: 30px;
      letter-spacing: 0;
      display: block;
      padding-top: 60px;
      padding-bottom: 20px;
    }
  }

  .list-blog {
    display: flex;
    justify-content: center;

    .blog {
      width: 350px;
      height: auto;
      margin: 10px;

      .image {
        width: 100%;
        height: 260px;
        background-size: cover;
        margin-bottom: 30px;
      }

      .title {
        margin-bottom: 30px;
        white-space: normal;
        color: #444;
        font-style: italic;
        font-weight: bolder;
        font-size: 18px;
      }

      .des {
        color: #888;
        line-height: 1.85;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}

@media screen and (max-width: 519px){
  .blogs {
    .header {
      .title {
        font-size: 300%;
        line-height: inherit;
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    .list-blog {
      flex-direction: column;
      margin: 0;
      padding: 0 15px;

      .blog {
        width: 100%;
        margin: 0;
        margin-bottom: 30px;

        & .title {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
