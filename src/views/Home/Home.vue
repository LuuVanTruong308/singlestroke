<template>
  <div class="home">
    <Header :dataHeader="header"/>
    <MenuBar />
    <MapHome :mapLocation="mapLocation"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import MapHome from './content/MapHome'
import MenuBar from './content/Menubar'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    MapHome,
    MenuBar
  },
  data() {
    return {
      header: {
        img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero-logo.png'
      },
      mapLocation: {
        markers: [
          {
            marker: [10.7, 106.9],
            name : "HCM"
          },
          {
            marker: [10.8, 106.6],
            name: 'xxx'
          },
          {
            marker: [10.6, 106.6],
            name: '1'
          }
        ],
        center: [10.6, 106.6]
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

