<template>
  <div id="header" class="header-anchor header-anchor-bottom">
    <div data-aos="fade-up">
      <header
        id="masthead"
        class="header-section site-header header-floating floating"
        role="banner"
      >
        <div class="wrapper">
          <h1 class="header-logo site-branding">
            <a href="#" rel="home">
              <img
                width="50"
                height="50"
                src="@/assets/header-logo.png"
                class="attachment-full size-full"
                alt="Jack &amp; Rose"
              >
            </a>
          </h1>
          <nav class="header-navigation" role="navigation">
            <button class="header-navigation-toggle menu-toggle toggle">
              <span class="fa fa-navicon"></span>
              <span class="screen-reader-text">Primary Menu</span>
            </button>
            <div class="menu-primary-container">
              <ul id="primary-menu" class="menu" style="max-height: 693.6px;">
                <li v-for="(item, index) in listMenu" :key="index" :id="index" class="menu-item">
                  <a v-if="!item.router" :href="item.link">
                    {{ item.name }}
                  </a>
                  <router-link v-else :to="item.link">
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import { MENUBAR } from './const';

export default {
  name: "menuBar",

  data() {
    return {
      listMenu: []
    }
  },

  created() {
    this.listMenu = MENUBAR
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 1200px) {
  .wrapper {
    width: 1110px;
  }
}
.wrapper {
  position: relative;
  width: 970px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
}
.header-anchor {
  height: 71px;
}
.header-section {
  position: absolute;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 71px;
  border-bottom: 1px solid;
  font-size: 12px;
  font-style: italic;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background-color: #FFFFFF;
  border-color: #e5e5e5;
  color: #888888;
  transition: all 0.3s ease-in-out;
  &.floating {
    position: static;
    width: 100%;
    left: 0;
    top: 0;
    margin-top: 0;
  }
  & a {
    color: #888888;
    &:hover,
    &:focus {
      color: #444444;
    }
  }
}
.header-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 70px;
  padding: 10px 0;
  margin: 0 0 0 15px;
  line-height: 50px;
  & img {
    display: inline-block;
    margin-top: -5px;
    vertical-align: middle;
    max-height: 50px;
  }
}

.header-navigation {
  display: block;
  padding: 0 70px;
  clear: both;
  text-align: center;

  &-toggle {
    display: none;
    width: 30px;
    height: 30px;
    float: right;
    padding: 0;
    margin: 20px 0;
    background-color: transparent;
    border: 0;
    font-size: 20px;
    line-height: 30px;
    color: #888888;

    &:hover,

    &:focus {
      color: #444444;
    }
  }

  & ul {
    display: table;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    white-space: nowrap;
  }

  & li {
    position: relative;

    & a {
      display: block;
      text-decoration: none;
    }
  }

  & div > ul > li {
    padding: 25px 0;
    margin: 0 1.5em;
    float: left;

    & a:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      margin-bottom: -1px;
      background-color: transparent;
      transition: all 0.25s ease-in-out;
    }

    & a:hover:after,
    & a.focus:after {
      background-color: #b4d2c8;
    }
  }
}

@media screen and (max-width: 519px){
  .wrapper {
    .header-navigation {
      .menu-primary-container {
        display: none;
      }
    }
  }
}
</style>
