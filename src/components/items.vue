<template>
  <div class="topics">
    <div class="topic-item" v-for="topic in topics">
      <span v-text="topic.title"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['topics'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="less"> 
  .topics {
    margin: 10px 15px 65px;

    .topic-item {
      padding: 10px 0px;
      border-bottom: 1px #ddd solid; 
    }
  
  }
</style>