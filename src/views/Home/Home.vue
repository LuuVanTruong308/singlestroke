<template>
  <div class="home">
    <!-- <Header :dataHeader="header"/> -->
    <div>
      <MapHome :mapLocation="mapLocation"/>
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from './Header'
// import Footer from './Footer'
import MapHome from './content/MapHome'

export default {
  name: 'home',
  components: {
    // Header,
    // Footer,
    MapHome,
  },
  data() {
    return {
      header: {
        img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero-logo.png'
      },
      mapLocation: {
        lat: '10.762622',
        log: '106.660172',
        name: 'Ho Chi Minh'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  margin: 0;
  padding: 0;
}
</style>

