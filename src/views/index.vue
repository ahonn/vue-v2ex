<template>
  <div>
    <img class="cover" src="../assets/images/cover.jpg">
  </div>
</template>

<script>
  export default {
    ready () {
      setTimeout(() => {
        this.$route.router.go({ name: 'list' });
      }, 1000);
    }
  }
</script>

<style lang="less">
  .cover {
    width: 100%;
    background-color: #fff;
  }
</style>

