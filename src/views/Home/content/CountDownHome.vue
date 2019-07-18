<template>
  <div class="count-down-home">
    <CountDown :deadline="timeCountDown" class="count-down"/>
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
    timeCountDown: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.count-down-home {
  padding: 20px 0 40px 0;
  background-color: #ecf2f0;

  .count-down {
    width: 400px;
    margin: 0 auto;
    justify-content: center;
  }
}
</style>
