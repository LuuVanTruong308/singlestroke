<template>
  <div class="jackrose-sow-section-header align-center">
    <h2
      class="jackrose-sow-section-heading typography-section-heading"
      style="color: #c8b4a0"
    >When &amp; Where</h2>
    <!-- <p class="jackrose-sow-section-subheading" style="color: #888888"></p> -->
    <div class="wedding">
      <div v-for="(item, index) in wedding" :key="index" class="wedding-item">
        <div class="wedding-item-img" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
        <div class="wedding-item-icon" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></div>
        <p class="wedding-item-title">{{ item.title }}</p>
        <p class="wedding-item-des">{{ item.des }}</p>
        <p class="wedding-item-time">{{ item.time_when }} - {{ item.time }} - {{ item.where }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event',

  data() {
    return {
      wedding: [
        {
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/event-ceremony-540x270.jpg',
          icon: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/event-icon-ceremony.png',
          title: 'WEDDING CEREMONY',
          des: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
          time_when: 'Sunday, 14 February, 2016',
          time: '10.00 AM',
          where: 'St. Peter Park, Kuta, Bali'
        },
        {
          img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/event-party-540x270.jpg',
          icon: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/event-icon-party.png',
          title: 'WEDDING PARTY',
          des: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
          time_when: 'Sunday, 14 February, 2016',
          time: '18.00 AM',
          where: 'St. Peter Park, Kuta, Bali'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
.jackrose-sow-section-header {
  padding-bottom: 90px
}

.jackrose-sow-section-heading {
  margin: 0;
}
.typography-section-heading {
  font-family: "Alex Brush";
  font-size: 400%;
  font-style: normal;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: 0;
  text-decoration: none;
  text-transform: none;
  color: #c8b4a0;
  background-color: #f6f4f2;
  padding: 100px 0 30px 0;
}

.align-center {
  margin: 0 auto;
  background-color: #f6f4f2;
}

.wedding {
  display: flex;
  background-color: #f6f4f2;
  justify-content: center;

  .wedding-item {
    margin: 15px;
    width: 525px;
    background-color: white;
    position: relative;

    .wedding-item-img {
      width: 100%;
      height: 265px;
      background-size: cover;
    }

    .wedding-item-icon {
      width: 60px;
      height: 60px;
      background-size: cover;
      position: absolute;
      left: 43%;
      top: 42%;
    }

    .wedding-item-title {
      padding-top: 50px;
      font-style: italic;
      font-weight: 400;
      color: #888888;
      font-size: 16px;
      text-transform: uppercase;
      color: #444;
    }

    .wedding-item-des {
      font-style: serif;
      font-size: 14px;
      line-height: 1.85;
      color: #888;
      padding: 10px 50px;
    }

    .wedding-item-time {
      color: #444;
      font-size: 120%;
      font-style: italic;
    }
  }
}
</style>
