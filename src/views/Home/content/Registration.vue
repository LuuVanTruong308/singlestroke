<template>
  <div class="wapper-registration" :style="{ backgroundImage: 'url(' + img + ')' }">
  </div>
</template>

<script>
export default {
  name: 'registration',

  data() {
    return {
      img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/rsvp.jpg'
    }
  },
}
</script>
<style lang="scss" scoped>
.wapper-registration {
  width: auto;
  height: 935px;
  background-size: cover; 
}
</style>
