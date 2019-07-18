<template>
  <div class="home">
    <Header :dataHeader.sync="dataHome.header"/>
    <MenuBar id="navbar" />
    <Profile :avatar.sync="dataHome.avatar"/>
    <CountDownHome v-if="dataHome.count_down" :time-count-down.sync="dataHome.count_down"/>
    <Infor :inforProfile.sync="dataHome.infors"/>
    <Event id="when&where" :events.sync="dataHome.events"/>
    <MapHome :mapLocation="dataHome.mapLocation"/>
    <Registration :registration.sync="dataHome.registration"/>
    <Supporter :support.sync="dataHome.supporter"/>
    <Quote :quote.sync="dataHome.quote"/>
    <Moments id="gallery"/>
    <Blog :blogs.sync="dataHome.blogs" id="blog" />
    <Footer :dataFooter.sync="dataHome.footer"/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import MapHome from './content/MapHome'
import MenuBar from './content/Menubar'
import Profile from './content/Profile'
import Infor from './content/Infor'
import Quote from './content/Quote'
import Event from './content/event'
import CountDownHome from './content/CountDownHome'
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
    Profile,
    Infor,
    Quote,
    Event,
    CountDownHome,
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
    getInforBasicUser() {
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

