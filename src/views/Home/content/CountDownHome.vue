<template>
  <div class="count-down-home">
    <CountDown :deadline="time" class="count-down"/>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'

export default {
  name: 'countDownHome',

  components: {
    CountDown
  },

  props: {

  },
  data() {
    return {
      time: 'August 24, 2019'
    }
  },
}
</script>
<style lang="scss" scoped>
.count-down-home {
  padding: 20px 0 40px 0;
  background-color: #ecf2f0;

  .count-down {
    width: 400px;
    margin: 0 auto;
  }
}
</style>
