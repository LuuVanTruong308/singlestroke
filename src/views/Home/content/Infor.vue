<template>
  <div class="infors">
    <div class="infor">
      <div class="infor-img" :style="{ backgroundImage: 'url(' + infors[0].img + ')' }">
      </div>
      <div class="infor-flex">
        <h4 class="name">{{ infors[0].type }} {{ infors[0].name }}</h4>
        <p class="description">{{ infors[0].description }}</p>
        <div class="infor-link">
          
        </div>
      </div>
    </div>

    <div class="infor">
      <div class="infor-flex">
        <h4 class="name">{{ infors[1].type }} {{ infors[1].name }}</h4>
        <p class="description">{{ infors[1].description }}</p>
        <div class="infor-link">
          <i class="fa fa-facebook"></i>
        </div>
      </div>

      <div class="infor-img" :style="{ backgroundImage: 'url(' + infors[1].img + ')' }">
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
              title: 'fa fa-facebook',
              link: '....'
            },{
              title: 'fa fa-instagram',
              link: '.....'
            },{
              title: 'fa fa-twitter',
              link: '...'
            },{
              title: 'fa fa-linkedin',
              link: '....'
            }
          ]
        },
        {
          type: 'rose',
          name: 'MARIE',
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/about-bride-540x405.jpg',
          description: "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
          icons: [{
              title: 'fa fa-facebook',
              link: '....'
            },{
              title: 'fa fa-instagram',
              link: '.....'
            },{
              title: 'fa fa-twitter',
              link: '...'
            },{
              title: 'fa fa-linkedin',
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
  width: 1100px;
  margin: 0 auto;
  margin-bottom: 40px;

  .infor {
    display: flex;
    justify-content: center;
    height: 370px;

    .infor-img {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
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
        font-weight: 600;
        text-transform: uppercase;
        color: #444;
      }

      .description {
        font-family: serif;
        font-size: 14px;
        line-height: 1.85;
        color: #888;
      }

      .infor-link {
      }
    }
  }
}
</style>
