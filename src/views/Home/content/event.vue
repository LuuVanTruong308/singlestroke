<template>
  <div class="event-section-header align-center">
    <h2
      class="event-section-heading typography-section-heading"
      style="color: #c8b4a0"
    >Khi nào &amp; Ở đâu</h2>
    <div data-aos="fade-up">
      <div class="wedding">
        <div v-for="(item, index) in events" :key="index" class="wedding-item">
          <div class="wedding-item-img" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
          <div class="wedding-item-icon" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></div>
          <p class="wedding-item-title">{{ item.title }}</p>
          <p class="wedding-item-des">{{ item.des }}</p>
          <p class="wedding-item-time">{{ item.time_when }} - {{ item.time }} - {{ item.where }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event',

  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.event-section-header {
  padding-bottom: 90px
}

.event-section-heading {
  margin: 0;
}
.typography-section-heading {
  font-family: "Dancing Script";
  font-size: 400%;
  font-style: normal;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: 0;
  text-decoration: none;
  text-transform: none;
  color: #c8b4a0;
  background-color: #f6f4f2;
  padding: 60px 0 30px 0;
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
