<template>
  <div class="invitation" :style="{ backgroundImage: 'url(' + invitation.backgroup + ')' }">
    <div class="content">
      <div class="invitation-inner">
        <img :src="invitation.img" alt="j&r" class="image">
        <div class="header">
          <p class="title">Tuấn Phan &amp; Vĩ Thanh</p>
        </div>
        <p class="text">Hôn lễ sẽ được tổ chức vào</p>
        <p class="time-location">{{ invitation.calender }}<br>({{invitation.lunaCalender}})<br>{{ invitation.location }}</p>

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
        calender: 'Chủ nhật,Ngày 14 Tháng 2 Năm 2016 ' ,
        lunaCalender: 'Tức ngày: 13 Tháng 5 Năm Kỷ Hợi',
        location: 'Nhà Trai: Thôn xxxx Xã yyyy, Hoài Đức, Hà Nội'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.invitation {
  height: auto;
  display: flex;
  justify-content: center;
  background-size: cover;

  .content {
    width: 970px;
    background-color: $primary-color;
    height: auto;
    margin: 90px 0;
    padding: 3%;
    opacity: 0.93;

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

        .title {
          color: $title-color;
          font-family: "Dancing Script";
          font-weight: normal;
          font-size: 400%;
          line-height: 0;
          letter-spacing: 0;
          display: block;
          padding-top: 20px 0;
        }
      }

      .text {
        font-style: $font-des;
        color: $primary-menu-color;
      }

     

      .time-location {
        color: $primary-menu-color;
        margin: 30px 0;
        font-size: $font-size-normal;
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
