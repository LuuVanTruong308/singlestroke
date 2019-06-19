<template>
  <div class="home">
    <Header :dataHeader="header"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      header: {
        img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/hero-logo.png'
      }
    }
  },
}
</script>
