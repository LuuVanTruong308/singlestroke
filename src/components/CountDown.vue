
<template>
  <div class="common-countdown">
    <div class="content">
      <p class="digit">{{ months | twoDigits }}</p>
      <p class="text">{{ months > 1 ? 'months' : 'month' }}</p>
    </div>
    <div class="content">
      <p class="digit">{{ days | twoDigits }}</p>
      <p class="text">{{ days > 1 ? 'days' : 'day' }}</p>
    </div>
    <div class="content">
      <p class="digit">{{ hours | twoDigits }}</p>
      <p class="text">{{ hours > 1 ? 'hours' : 'hour' }}</p>
    </div>
    <div class="content">
      <p class="digit">{{ minutes | twoDigits }}</p>
      <p class="text">minutes</p>
    </div>
    <div class="content">
      <p class="digit">{{ seconds | twoDigits }}</p>
      <p class="text">seconds</p>
    </div>
  </div>
</template>

<script>
let interval = null;

export default {
  name: "CountDown",
  props: {
    deadline: {
      type: String
    },
    end: {
      type: String
    },
    stop: {
      type: Boolean
    }
  },

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0
    };
  },

  created() {
    if (!this.deadline && !this.end) {
      throw new Error("Missing props 'deadline' or 'end'");
    }

    let endTime = this.deadline ? this.deadline : this.end;
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);

    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'");
    }

    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },

  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60;
    },

    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },

    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },

    days() {
      return Math.trunc(this.diff / 60 / 60 / 24) % 30;
    },

    months() {
      return Math.trunc(this.diff / 60 / 60 / 30/ 24);
    }
  },

  watch: {
    now() {
      this.diff = this.date - this.now;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        clearInterval(interval);
      }
    }
  },

  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  },

  destroyed() {
    clearInterval(interval);
  }
};
</script>


<style scoped lang="scss">
.common-countdown {
  display: flex;

  .content {
    width: auto;
    margin-right: 20px;
    text-align: center;
    color: #888;

    .digit {
      font-size: 300%;
      font-style: italic;
      line-height: 0;
    }
  }
}
</style>
