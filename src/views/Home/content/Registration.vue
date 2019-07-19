<template>
  <div v-if="registration" class="wrapper-registration">
  </div>
</template>

<script>
export default {
  name: 'registration',

  props: {
    registration: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper-registration {
  width: auto;
  height: 935px;
  background-size: cover;
  background-image: url('../../../assets/rsvp.png');

  @media screen and (max-width: 575px) {
    height: 650px;
    background-size: cover;
  }
}
</style>
