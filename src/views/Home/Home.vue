<template>
  <div class="home">
    <Header :dataHeader="dataHome.header"/>
    <MenuBar id="navbar" />
    <Jackrose :avarta="dataHome.avatar"/>
    <CountDownHome v-if="dataHome.count_down" :time-count-down="dataHome.count_down"/>
    <Infor :inforProfile="dataHome.infors"/>
    <Event id="when&where" :events="dataHome.events"/>
    <MapHome :mapLocation="dataHome.mapLocation"/>
    <GiftRegistry :giftRegistry="dataHome.giftRegistry"/>
    <Registration :registration="dataHome.registration"/>
    <Supporter :support="dataHome.supporter"/>
    <Quote :quote="dataHome.quote"/>
    <Moments id="gallery" :moment="dataHome.moment"/>
    <Blog :blogs="dataHome.blogs"/>
    <Footer :dataFooter="dataHome.footer"/>
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
import Supporter from './content/Supporter'
import Blog from './content/Blog'

import * as apiHome from '@/api/home.js'

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
    Supporter,
    Blog
  },

  data() {
    return {
      dataHome: {}
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.getInforBasicUser()
  },

  methods: {
    async getInforBasicUser() {
      apiHome.getInfor().then((res) => {
        this.dataHome = res.data
      })
    },

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
  overflow-x: hidden;

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
}
</style>

