<template>
  <div class="blogs">
    <div class="header">
      <p class="title">Our Blog</p>
    </div>

    <div class="list-blog">
      <div v-for="blog in list" :key="blog.id" class="blog">
        <div class="image" :style="{ backgroundImage: 'url(' + blog.img + ')' }"></div>
        <div class="title">{{ blog.title }}</div>
        <div class="des">{{ blog.des }}</div>
      </div>
    </div>
    
    <div class="more">
      <span class="more-blog"> More Blog Posts <i class="fa fa-angle-right"></i></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'blog',

  props: {

  },

  data() {
    return {
      list: [
        {
          id: 1,
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/blog2-540x398.jpg',
          title: 'ORGANIZING WEDDING EVENTS',
          des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec '
        }, {
          id: 2,
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/blog2-540x398.jpg',
          title: 'DESIGNING OUR OWN WEDDING INVITATION',
          des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec '
        },{
          id: 3,
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/blog2-540x398.jpg',
          title: 'ORGANIZING WEDDING EVENTS',
          des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec '
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.blogs {
  background-color: #f6f4f2;
  padding: 20px 0 60px 0;

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
        height: 250px;
        background-size: cover; 
        margin-bottom: 30px;
      }

      .title {
        margin-bottom: 30px;
        white-space: normal;
        color: #444;
        font-style: italic;
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

  .more {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .more-blog {
      background-color: #b4d2c8;
      border-color: #b4d2c8;
      color: #ffffff;
      padding: 10px 20px;
      cursor: pointer;
    }
  }
}
</style>
