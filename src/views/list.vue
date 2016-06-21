<template>
  <Navbar
    :page-type="params.tab | getTitleStr"
    :show-menu.sync="showMenu">
  </Navbar>

  <section id="page">
    <ul class="post-list">
      <li v-for="item in topics" v-link="{ name: 'topic', params: { id: item.id } }">
        <div class="avatar">
          <img :src="item.member.avatar_normal" :alt="item.member.username" />
        </div>
        <h3 v-text="item.title"></h3>
        <div class="info">
          <span class="node" v-text="item.node.title"></span>
          <span class="author" v-text="item.member.username"></span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        showMenu: false,
        topics: [],
        params: {
          tab: 'latest'
        },
        pageType: ""
      }
    },
    route: {
      data (transition) {
        let query = transition.to.query;

        if (query) {
          this.params.tab = query.tab || 'latest';
        }

        if (query.type == 'node') {
          var url = './api/nodes/' + transition.to.params.id;
        } else {
          var url = './api/topics/' + this.params.tab;
        }

        console.log(url);
        this.getTopics(url);
        this.showMenu = false;
      }
    },
    methods: {
      getTopics (url) {
        this.$http.get(url).then(function (response) {
          if (response.data) {
            this.topics = response.data;
          }
        });
      }
    },
    components: {
      "Navbar": require('../components/navbar.vue')
    }
  }
</script>


<style lang="sass">
  #page {
    padding-top: 44px;

    .post-list {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        height: 88px;
        padding: 10px 15px;
        border-bottom: 1px solid #d5dbdb;
        box-sizing: border-box;

        h3 {
          margin: 10px 0;
          font-size: 15px;
          line-height: 1.5;
          white-space:nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .avatar {
          float: left;
          padding-top: 10px;
          padding-right: 15px;
          vertical-align: middle;

          img {
            border-radius: 50%;
          }
        }

        .info {

          .author {
            font-size: 13px;
            margin-left: 10px;
            color: #888;
          }
          .node {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
