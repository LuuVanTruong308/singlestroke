<template>
  <div class="invitation" :style="{ backgroundImage: 'url(' + require(`@/assets/images/invitation/invitation.png`) + ')' }">
    <div class="content">
      <div class="invitation-inner">
        <img :src="invitation.img" alt="j&r" class="image">
        <div class="header">
          <span class="title">Tuấn Phan</span>
          <span class="title"> &amp;</span>
          <span class="title"> Minh Hằng</span>
        </div>
        <p class="text">Hôn lễ sẽ được tổ chức vào</p>

        <div class="invitation__infor">
          <span class="invitation__calender">{{ invitation.calender }}</span>
          <span class="invitation__luna-calender">({{ invitation.lunaCalender}})</span>
          <span class="invitation__location">{{ invitation.location }}</span>
        </div>

        <p class="move-home"><router-link to="/wedding-detail"> Chi tiết đám cưới </router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invitation',

  components: {
  },

  data() {
    return {
      invitation: {
        backgroup: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/invitation-bg.jpg',
        img: 'http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2016/10/invitation-logo.png',
        calender: 'Chủ nhật, ngày 28 tháng 7 năm 2019 ' ,
        lunaCalender: 'Tức ngày: 13 Tháng 5 Năm Kỷ Hợi',
        location: 'Nhà trai: xóm Minh Đức, Thôn Đa Phúc, Xã Sài Sơn, Huyện Quốc Oai, TP Hà Nội'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.invitation {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-size: cover;

  &__calender {
    color: $primary-menu-color;
    font-size: $font-size-normal;
    display: inline-block;
  }

  &__luna-calender {
    @extend .invitation__calender;
    margin-bottom: 15px;
  }

  &__location {
    @extend .invitation__calender;
    margin-bottom: 30px;
  }

  &__infor {
    display: flex;
    flex-direction: column;
  }

  .content {
    display: table;
    position: absolute;
    width: 970px;
    background-color: $primary-color;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;

    .invitation-inner {
      border: 4px double #ddd;
      text-align: center;
      padding-bottom: 40px;

      .image {
        margin-top: 50px;
      }

      .header {
        font-size: $font-size-normal;
        line-height: 1.85;
        text-align: center;
        margin-top: 50px;

        .title {
          color: $title-color;
          font-family: "Dancing Script";
          font-weight: normal;
          font-size: 400%;
          line-height: 0;
          letter-spacing: 0;
          padding-top: 20px 0;
        }
      }

      .text {
        font-style: $font-des;
        color: $primary-menu-color;
      }

      .move-home {
        background-color: #b4d2c8;
        width: 200px;
        height: 30px;
        font-size: 14px;
        margin: 0 auto;
        padding-top: 10px;
        text-transform: uppercase;

        a {
          text-decoration: none;
          color: white;
          font-style: $font-des;
        }
      }
    }
  }
}

@media screen and (max-width: 519px){
  .invitation {
    .content {
      .invitation-inner {
        .text {
          font-size: 130%;
        }

        .header {
          display: flex;
          flex-direction: column;
          margin: 0;

          .title {
            font-size: 300%;
            line-height: 1.1;
          }
        }
      }
    }
  }
}
</style>
