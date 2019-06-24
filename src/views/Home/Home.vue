<template>
  <div class="home">
    <Header :dataHeader="header"/>
    <MenuBar id="navbar"/>
    <Jackrose />
    <Infor />
    <MapHome :mapLocation="mapLocation"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import MapHome from './content/MapHome'
import MenuBar from './content/Menubar'
import Jackrose from './content/Jackrose'
import Infor from './content/Infor'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    MapHome,
    MenuBar,
    Jackrose,
    Infor
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
      },
      scrollY: null,
      sticky: null,
    }
  },

 watch: {
    scrollY(newValue) {
      if (newValue >= this.sticky) {
        document.getElementById("navbar").classList.add("sticky")
      } else {
        document.getElementById("navbar").classList.remove("sticky")
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollY = Math.round(window.scrollY);
      this.sticky = document.getElementById("navbar").offsetTop
    });
  },
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

