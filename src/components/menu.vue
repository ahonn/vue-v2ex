<template>
  <section id="sidebar" :class="{ 'show': showMenu }">

  </section>
</template>

<script>
  export default {
    replace: true,
    props: ['showMenu', 'pageType']
  }
</script>

<style lang="sass">
  #sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 600px;
    left: -200px;
    width: 200px;
    background: #fff;
    transition: all .3s ease;
    z-index: 99;

    &.show {
      transform: translateX(200px);
    }
  }
</style>
