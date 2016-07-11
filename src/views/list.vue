<template>
  <v-header :page-title="pageTitle" :show-tab="true"></v-header>
  <v-items :topics="topics"></v-items> 
  <v-tabbar></v-tabbar>  
</template>

<script>
  export default {
    data () {
      return {
        pageTitle: "全部",
        topics: [],
      }
    },
    route: {
      data: function (transition) {
        let query = transition.to.query
        let tab = query.tab

        this.getTopics('/api/topics/' + tab)
      }
    },
    methods: {
      getTopics: function (url) {
        this.$http.get(url).then((response) => {
          if (response.ok) {
            this.topics = response.json()
          }
        })
      }
    },
    components: {
      "v-header": require('../components/header.vue'),
      "v-tabbar": require('../components/tabbar.vue'),
      "v-items": require('../components/items.vue')
    }
  }
</script>

<style lang="less">
  @import '~vux/dist/vux.css';
</style>