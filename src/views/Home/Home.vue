<template>
  <div class="home">
    <Header :dataHeader="header"/>
    <MenuBar id="navbar" />
    <Jackrose />
    <CountDownHome />
    <Infor />
    <Event />
    <MapHome :mapLocation="mapLocation"/>
    <GiftRegistry />
    <Registration />
    <Quote />
    <Moments />
    <Footer :dataFooter="footer"/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import MapHome from './content/MapHome'
import MenuBar from './content/Menubar'
import Jackrose from './content/Jackrose'
import Infor from './content/Infor'
import Quote from './content/Quote'
import Event from './content/event'
import CountDownHome from './content/CountDownHome'
import GiftRegistry from './content/GiftRegistry'
import Registration from './content/Registration'
import Moments from './content/Moments'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    MapHome,
    MenuBar,
    Jackrose,
    Infor,
    Quote,
    Event,
    CountDownHome,
    GiftRegistry,
    Registration,
    Moments
  },
  data() {
    return {
      header: {
        img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero-logo.png'
      },
      footer: {
        img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/footer-logo.png',
        backgroup: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/footer.jpg'
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
      },
      // scrollY: null,
      // sticky: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const windowHeight = window.innerHeight
      const offsetHeightScroll = window.scrollY
      const menuBar = document.getElementById('masthead')
      if (windowHeight <= offsetHeightScroll) {
        menuBar.style.position = 'fixed'
      } else {
        menuBar.style.position = 'static'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  margin: 0;
  padding: 0;

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>

