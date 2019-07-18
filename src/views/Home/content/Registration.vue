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
  background-attachment: fixed;
  background-image: url('../../../assets/rsvp.png')
}
</style>
