<template>
  <div class="wrapper-profile">
    <div v-if="avatar" data-aos="fade-up">
      <div class="profile">
        <div>
          <img class="profile-image" src="@/assets/images/profile/jack.png">
          <div class="name"> {{ avatar.groomName }}</div>
        </div>
        <div class="img-and">
          <img :src="avatar.imgAnd">
        </div>
        <div>
          <img class="profile-image" src="@/assets/images/profile/rose.jpg">
          <div class="name">{{ avatar.brigdeName }}</div>
        </div>
      </div>

      <div class="header">
        <p class="title">Hôn lễ được tổ chức vào hồi</p>
        <p class="calender">{{ avatar.time }} - {{ avatar.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',

  props: {
    avatar: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-profile {
  margin: 100px 0;
  text-align: center;

  .profile {
    display: flex;
    justify-content: center;
    height: 310px;
    margin-bottom: 60px;

    .img-and {
      width: 160px;
      height: 100px;
      margin-top: 65px;
    }

    @media screen and (max-width: 519px){
    .img-and {
      width: 100%;
      height: auto;
      margin: 2em 0;
    }
  }

    .name {
      margin-top: 20px;
      font-style: italic;
      font-weight: 400;
      color: #888888;
      font-size: 20px;
      text-transform: uppercase;
    }
  }

  .header {
    font-size: 14px;
    line-height: 1.85;
    color: #888;

    .title {
      color: #dcc8b4;
      font-family: "Dancing Script";
      font-weight: normal;
      font-size: 400%;
      line-height: 0;
      letter-spacing: 0;
    }
  }

  .profile-image {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-size: auto;
  }
}

@media screen and (max-width: 519px){
  .wrapper-profile {
    .header {
      .title {
        font-size: 300%;
        line-height: 1.1;
        margin: 0;
      }

      .calender {
        font-size: 130%;
        margin-top: 10px;
      }
    }

    .profile {
      display: flex;
      flex-direction: column;
      height: auto;
    }
  }
}
</style>
