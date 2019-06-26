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
    <Suport />
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
import Suport from './content/Suport'

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
    Moments,
    Suport
  },
  data() {
    return {
      header: {
        img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero-logo.png',
        list_img_header: [
          {
            id: 1,
            img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero3.jpg'
          },{
            id: 2,
            img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero2.jpg'
          },{
            id: 3,
            img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero1.jpg'
          }
        ]
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const windowHeight = window.innerHeight
      const offsetHeightScroll = window.scrollY
      const menuBar = document.getElementById('navbar')

      if (windowHeight <= offsetHeightScroll) {
        menuBar.classList.add("sticky");
      } else {
        menuBar.classList.remove("sticky");
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
    z-index: 999;
  }
}
</style>

