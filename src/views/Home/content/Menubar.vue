<template>
  <div class="menu-bar">
    <div v-for="(drop, index) in listMenu" :key="index" class="dropdown">
      <button class="dropbtn">{{ drop.name }}</button>
      <div class="dropdown-content">
        <a v-for="(content, indexContent) in drop.content" :key="indexContent">{{ content }}</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'menuBar',

  data() {
    return {
      listMenu: [
        {
          drop: {
            name: 'Home',
            content : [
              'HomeImage',
              'HomeVideo',
              'Home Slide'
            ]
          }
        },
        {
          drop: {
            name: 'Home',
            content : [
              'HomeImage',
              'HomeVideo',
              'Home Slide'
            ]
          }
        }
      ]
    }
  },
}
</script>

.<style lang="scss" scoped>
  .menu-bar {
    font-family: Georgia,Times,"Times New Roman",serif;
    height: 71px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #888888;
    display: flex;
    align-items: center;

    .dropbtn {
      background-color: #4CAF50;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {background-color: #ddd;}

    .dropdown:hover .dropdown-content {display: block;}

    .dropdown:hover .dropbtn {background-color: #3e8e41;}
  }
</style>
