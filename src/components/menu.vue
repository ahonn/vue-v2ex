<template>
  <section id="menu" :class="{ 'show': showMenu }">
    <div class="login"></div>
    <ul class="menu-list">
      <li class="iconfont icon-all" v-link="{ name: 'home', query: { name: 'all', tab: 'latest' } }">
        <span>全部</span>
      </li>
      <li class="iconfont icon-hot" v-link="{ name: 'list', query: { name: 'hot', tab: 'hot' } }">
        <span>最热</span>
      </li>
      <li class="iconfont icon-node" v-link=" { name: 'nodes' } ">
        <span>节点</span>
      </li>
      <li class="iconfont icon-about">
        <span>关于</span>
      </li>
    </ul>
  </section>
</template>

<script>
  require('../assets/scss/iconfont/iconfont.css');

  export default {
    replace: true,
    props: ['showMenu', 'pageType']
  }
</script>

<style lang="sass">
  #menu {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    left: -250px;
    width: 250px;
    background: #fff;
    transition: all .3s ease;
    z-index: 99;

    &.show {
      transform: translateX(250px);
    }
  }

  .login {
    height: 25%;
    background: #334;
  }

  .menu-list {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #d4d4d4;
    overflow: hidden;
    list-style: none;

    li {
      line-height: 1.5;
      padding: 10px 20px;

      &:last-child {
        border-bottom: none;
      }

      span {
        display: inline-block;
        margin-left: 10px;
        font-size: 16px;
      }

    }

    .v-link-active {
      background: #d4d4d4;
    }
  }
</style>
