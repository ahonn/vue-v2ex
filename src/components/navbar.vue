<template>
  <div class="cover" v-if="showMenu" @click="closeMenu"></div>
  <header id="navbar">
    <div class="menu iconfont icon-menu" @click="openMenu"></div>
    <span v-text="pageType"></span>
  </header>
  <Menu
    :show-menu="showMenu"
    :page-type="pageType"
    v-if="showMenu">
  </Menu>
</template>

<script>
  export default {
    replace: true,
    props: ['pageType', 'showMenu'],
    methods: {
      openMenu () {
        this.showMenu = !this.showMenu;
      },
      closeMenu () {
        this.showMenu = !this.showMenu;
      }
    },
    components: {
      'Menu': require('./menu.vue')
    }
  }
</script>

<style lang="sass">
  #navbar {
    height: 44px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: all .3s ease-out;
    box-shadow: 0 0 4px rgba(#334, 0.5);
    background: #334;
    z-index: 5;

    span {
      display: block;
      font-size: 16px;
      text-align: center;
      line-height: 44px;
      color: #fefefe;
    }

    .menu {
      float: left;
      margin: 12px;
      position: absolute;
      color: #fff;
      font-size: 18px;
      z-index: 10;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }
</style>
