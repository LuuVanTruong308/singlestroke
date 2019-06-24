<template>
  <div class="menu-bar">
    <div class="logo">
      <img src="http://singlestroke.io/demo/jackrose-wp/wp-content/uploads/2015/11/header-logo.png" />
    </div>
    <div class="list-menu">
      <div v-for="(drop, index) in listMenu" :key="index" class="dropdown">
        <button class="dropbtn">{{ drop.name }}</button>
        <div class="dropdown-content">
          <a v-for="(content, indexContent) in drop.content" :key="indexContent">{{ content }}</a>
        </div>
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
          name: 'HOME',
          content : [
            'HOME IMAGE',
            'HOME VIDEO',
            'HOME SLIDE'
          ]
        },
        {
          name: 'GROOM & BRIDE',
          content : [
          ]
        },{
          name: 'WHEN AND WHERE',
          content : [
          ]
        },{
          name: 'GALLERY',
          content : [
          ]
        },{
          name: 'BLOG',
          content : [
            'BLOG POSTS INDEX',
            'SINGLE POSY',
          ]
        },{
          name: 'FEATURES',
          content : [
            'INVITATION',
          ]
        }
      ],
    }
  },

}
</script>

.<style lang="scss" scoped>
  .menu-bar {
    border-bottom: 1px solid #e5e5e5;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #888888;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    .list-menu {
      margin: 0 140px;
    }

    .dropbtn {
      background-color: white;
      color: #888888;
      border: none;
      height: 70px;
      margin-right: 25px;
      font-size: 12px;
      font-style: italic;
    }

    .dropdown {
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      color: #888888;
      font-style: italic;
      background-color: white;
      min-width: 200px;
      text-align: left;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      padding: 12px 16px;
      background-color: white;
      text-decoration: none;
      display: block;
      font-size: 12px;
      font-style: italic;
    }

    .dropdown-content a:hover {color: black;}

    .dropdown:hover .dropdown-content {display: block;}

    .dropdown:hover .dropbtn {
      border-bottom: 2px solid #b4d2c8;
    }
  }
</style>
