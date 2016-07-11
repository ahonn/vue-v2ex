<template>
  <v-header :page-title="pageTitle" :show-back="true"></v-header>
  
  <section class="topic" v-if="topic.length != 0">
    <h2 class="topic-title" v-text="topic.title"></h2>
    <div class="topic-info">
      <img class="avatar" :src="topic.member.avatar_normal" />
      <div class="col">
        <span class="author" v-text="topic.member.username" ></span>
        <time>发布于：{{ topic.created | getTimeFromNow }}</time>
      </div>
    </div>
    <div class="topic-content" v-html="topic.content_rendered"></div>

    <!-- <div class="replies">
      <ul class="replies_list">
        <li v-for="reply in replies" class="reply">
          <div class="reply-info">
            <img class="avatar" :src="reply.member.avatar_mini" />
            <span class="username" v-text="reply.member.username"></span>
            <span class="time" v-text="reply.created | getTimeStr true"></span>
            <span class="floor" v-text="$index + 1"></span>
          </div>
          <div class="reply-content" v-html="reply.content_rendered">
          </div>
        </li>
      </ul>
    </div> -->

  </section>

  <loading :show="isLoading" :text="Loading"></loading>
  <v-tabbar></v-tabbar>
</template>

<script>
  import Loading from 'vux/dist/components/loading'

  export default {
    data () {
      return {
        pageTitle: "主题",
        isLoading: true,
        topic: [],
        replies: []
      }
    },
    route: {
      data: function (transition) {
        let topicId = transition.to.params.id;

        this.getTopic(topicId)
      }
    },
    methods: {
      getTopic: function (id) {
        let url = '/api/topic/' + id

        this.$http.get(url).then((response) => {
          if (response.ok) {
            this.topic = response.json()[0]
            this.isLoading = false
          }
        })
      }
    },
    components: {
      "v-header": require('../components/header.vue'),
      "v-tabbar": require('../components/tabbar.vue'),
      Loading
    }
  }
</script>

<style lang="less">
  @import '~vux/dist/vux.css';

  .topic {
    margin: 0px 15px 48px;

    .topic-title {
      padding: 5px;
      font-size: 16px;
      line-height: 1.5;
      background: #f0f0f0;
      border-radius: 5px;
    }

    .topic-info {
      font-size: 14px;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
      }

      .col {
        display: inline-block;
        margin-left: 10px;
        position: relative;
        top: -5px;

        span {
          display: block;
          width: 100%;
          padding-bottom: 5px;
        }

        time {
          padding-top: 5px;
          font-size: 12px;
        }
      }
    }

    .topic-content {
      padding-bottom: 20px;
      font-size: 14px;

      img {
        max-width: 100%;
      }

      code {
        display: block;
        overflow-x: auto;
      }
    }
  }
</style>