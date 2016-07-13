<template>
  <v-header :page-title="pageTitle"></v-header>
  
  <section id="nodes" v-if="!isLoading">
    <div class="search">
      <input type="text" class="input-text" v-model="nodeTitle" placeholder="搜索节点" 
        @focus="toggleTabbar" @blur="toggleTabbar">
    </div>
    <div class="nodes">
      <a v-for="node in nodes | filterBy nodeTitle in 'title'" class="node-item" 
        v-link="{ name: 'node', params: { name: node.name }}">
        <span v-text="node.title"></span>
      </a>
    </div>
  </section>

  <loading :show="isLoading" :text="Loading"></loading>
  <v-tabbar v-if="showTabbar"></v-tabbar>
</template>

<script>
  import vHeader from '../components/header.vue'
  import vTabbar from '../components/tabbar.vue'
  import Loading from 'vux/dist/components/loading'

  export default {
    data () {
      return {
        pageTitle: "节点",
        isLoading: true,
        showTabbar: true,
        nodeTitleL: "",
        nodes: []
      }
    },
    route: {
      data: function (transition) {
        this.getNodes()
      }
    },
    methods: {
      getNodes: function () {
        setTimeout(() => {
          this.isLoading = false
        }, 5000)

        this.$http.get('/api/node/all').then((response) => {
          if (response.ok) {
            this.nodes = response.json()
            this.isLoading = false
          }
        })
      },
      toggleTabbar: function (event) {
        setTimeout(() => {
          this.showTabbar = !this.showTabbar
        }, this.showTabbar ? 0 : 200) 
      }
    },
    components: {
      "v-header": vHeader,
      "v-tabbar": vTabbar,
      "loading": Loading
    }
  }
</script>

<style lang="less">
  @import '~vux/dist/vux.css';

  #nodes {
    padding-top: 44px;

    .search {
      margin: 15px;

      .input-text {
        width: 100%;
        padding: 5px 10px;
        font-size: 16px;
        line-height: 1.5;
        border: 2px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
      }
    }

    .nodes {
      margin: 15px;

      .node-item {
        display: inline-block;
        margin: 5px;
        padding: 2px 5px;
        color: #334;
        background: #f0f0f0;
        text-decoration: none;
        line-height: 1.5;
        border-radius: 5px;
      }
    }
  }
</style>