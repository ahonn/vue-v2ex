<template>
  <Navbar
    :page-type=" 'nodes' | getTitleStr"
    :show-menu.sync="showMenu">
  </Navbar>

  <section id="page">
    <div class="search">
      <input type="text" class="input-text" v-model="nodetitle" placeholder="搜索节点">
    </div>
    <div class="nodes">
      <a v-for="node in nodes | filterBy nodetitle in 'title'" class="node-item" v-link="{ name: 'node', params: { id: node.id }, query: { type: 'node', tab: node.title } }">
        <span v-text="node.title"></span>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        showMenu: false,
        nodes: {},
        nodetitle:''
      }
    },
    route: {
      data (transition) {
        this.getNodes();
        this.showMenu = false;
      }
    },
    methods: {
      getNodes () {
        let url = './api/nodes/all';
        this.$http.get(url).then(function (response) {
          if (response.data) {
            this.nodes = response.data;
          }
        });
      }
    },
    components: {
      "Navbar": require('../components/navbar.vue')
    }
  }
</script>

<style lang='sass'>
  #page {
    padding-top: 44px;

    .search {
      padding: 15px;

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
      padding: 15px;

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
