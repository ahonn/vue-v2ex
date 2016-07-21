<template>
  <v-header :page-title="pageTitle" :show-tab="true"></v-header>
  
  <section id="topics">
    <div class="topic-item" v-for="topic in topics" v-link="{ name: 'topic', params: { id: topic.id } }">
      <div class="avatar">
        <img :src="topic.member.avatar_normal" :alt="topic.member.username" />
      </div>
      <div class="content">
        <h3 v-text="topic.title"></h3>
        <div class="info">
          <span class="node" v-text="topic.node.title" v-link="{ name: 'node', params: { name: topic.node.name } }"></span>
          <span class="author" v-text="topic.member.username"></span>
          <span class="created" v-text="topic.created | getTimeFromNow"></span>
          <span class="replies" v-text="topic.replies"></span>
        </div>
      </div>
    </div>
  </section>

  <loading :show="isLoading" :text="Loading"></loading>
  <v-tabbar></v-tabbar>  
</template>

<script>
  import vHeader from '../components/header.vue'
  import vTabbar from '../components/tabbar.vue'
  import Loading from 'vux/dist/components/loading'

  export default {
    data () {
      return {
        pageTitle: "全部",
        isLoading: true,
        topics: []
      }
    },
    route: {
      data: function (transition) {
        this.topics = []
        this.isLoading = true
        
        let query = transition.to.query
        let tab = query.tab || "latest"

        this.$children[0].tabData.active = tab

        this.getTopics(tab)
      }
    },
    methods: {
      getTopics: function (tab) {
        let url = '/api/topics/' + tab

        setTimeout(() => {
          this.isLoading = false
        }, 5000)

        this.$http.get(url).then((response) => {
          if (response.ok) {
            this.topics = response.json()
            this.isLoading = false
          }
        })
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
  #topics {
    margin: 81px 15px 48px;

    .topic-item {
      padding: 15px 0px;
      border-bottom: 1px #ddd solid; 

      .avatar {
        float: left;
        padding-right: 15px;

        img {
          width: 40px;
          border-radius: 50%;
        }
      }

      .content {
          
        h3 {
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
          white-space:nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .info {
          color: #666;
          margin-top: 5px;
          font-size: 12px;

          .node::after,
          .author::after {
            content: "·";
            margin-left: 5px;
            font-weight: 600;
          }

          .replies {
            float: right;
            padding: 0px 8px;
            font-size: 12px;
            background-color: #ddd;
            border-radius: 7px;
          }
        }
      }
    }
  }
</style>