<template>
  <div class="infors">
    <div class="header">
      <p class="title">Groom &amp; Bride</p>
    </div>

    <div data-aos="fade-up">
      <div class="infor" v-for="(info, index) in infors" :key="index">
        <div class="infor-img" :class="info.position ? 'right': ''" :style="{ backgroundImage: 'url(' + info.img + ')' }"></div>
        <div class="infor-flex">
          <h4 class="name">{{ info.type }} {{ info.name }}</h4>
          <p class="description">{{ info.description }}</p>
          <div class="infor-link" >
            <div v-for="(icon, index) in info.icons" :key="index">
              <a :href="icon.link">
                <i :class="icon.title"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infor',

  data() {
    return {
      infors: [
        {
          type: 'jack',
          name: 'Wilson',
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/about-groom-540x405.jpg',
          description: "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
          icons: [{
              title: 'fab fa-facebook',
              link: 'https://www.facebook.com/'
            },{
              title: 'fab fa-instagram',
              link: '.....'
            },{
              title: 'fab fa-twitter',
              link: '...'
            },{
              title: 'fab fa-linkedin',
              link: '....'
            }
          ]
        },
        {
          position: 'left',
          type: 'rose',
          name: 'MARIE',
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/about-bride-540x405.jpg',
          description: "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
          icons: [{
              title: 'fab fa-facebook',
              link: 'https://www.facebook.com/'
            },{
              title: 'fab fa-instagram',
              link: '.....'
            },{
              title: 'fab fa-twitter',
              link: '...'
            },{
              title: 'fab fa-linkedin',
              link: '....'
            }
          ]
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.infors {
  margin: 0 auto;
  margin-bottom: 100px;
  overflow: hidden;

  .infor {
    display: flex;
    justify-content: center;
    height: 370px;

    .infor-img {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      &.right {
        order: 2;
      }
    }

    .infor-flex {
      text-align: left;
      font-size: 14px;
      padding: 42px;
      width: 85%;
      background-color: #f6f4f2;

      .name {
        font-size: 120%;
        font-style: italic;
        font-weight: 400;
        text-transform: uppercase;
        color: #444;
        letter-spacing: .1em;
      }

      .description {
        font-family: serif;
        font-size: 14px;
        line-height: 1.85;
        color: #888;
      }

      .infor-link {
        display: flex;
        color: #ccc;
      }
    }
  }

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
}

.fab {
  margin-right: 10px;
  font-size: 18px;
  color: #888;
}

@media (min-width: 1281px) {
  .infors {
    width: 1200px;

    .infor {
      height: 400px;

      .infor-flex {
        width: 86%;
      }
    }
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .infors {
    width: 1100px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .infors {
  }
}

@media screen and (max-width: 768px) {
  .infors {
  }
}
</style>
