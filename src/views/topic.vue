<template>
  <Navbar
    :page-type=" 'topic' | getTitleStr"
    :show-menu.sync="showMenu">
  </Navbar>

  <section id="page">
    <h2 class="topic-title" v-text="topic.title"></h2>
    <section class="topic-info">
      <img :src="topic.member.avatar_normal" />
      <div class="col">
        <span class="author" v-text="topic.member.username" ></span>
        <time>发布于：{{ topic.created | getTimeStr true }}</time>
      </div>
    </section>
    <section class="topic-content" v-html="topic.content_rendered">
    </section>
    <section class="replies">
      <ul class="replies_list">
        <li v-for="reply in replies" class="reply">
          <img :src="reply.member.avatar_mini" />
          <div class="col">
            <span class="username" v-text="reply.member.username"></span>
            <time v-text="reply.created | getTimeStr true"></time>
          </div>
          <div class="reply-content" v-html="reply.content_rendered">
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        showMenu: false,
        topic: {},
        replies: {}
      }
    },
    route: {
      data (transition) {
        let topicId = transition.to.params.id;

        this.getTopic(topicId);
        this.showMenu = false;
      }
    },
    methods: {
      getTopic (topicId) {
        this.$http.get('./api/topics/' + topicId)
          .then(function (response) {
            if (response.data) {
              this.topic = response.data[0];
            }
          });

        this.$http.get('./api/replies/' + topicId)
          .then(function (response) {
            if (response.data) {
              this.replies = response.data;
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
    font-size: 14px;

    .topic-title {
      margin: 15px;
      padding: 5px;
      font-size: 18px;
      line-height: 1.5;
      background: #f0f0f0;
      border-radius: 5px;
    }

    .topic-info {
      margin: 15px;

      img {
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
          font-size: 13px;
          padding-top: 5px;
        }
      }
    }

    .topic-content {
      margin: 30px 15px;

      img {
        width: 100%;
      }

      code {
        display: block;
        overflow-x: auto;
      }
    }

    .replies_list {
      list-style: none;
      padding-left: 0px;

      .reply {
        padding: 15px;
        border-top: 1px solid #ddd;

        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #f0f0f0;
        }

        .col {
          display: inline-block;
          margin-left: 5px;
          position: relative;
          top: -5px;

          time {
            margin-left: 5px;
            color: #bbb;
            font-size: 12px;
          }
        }

        .reply-content {
          margin-top: 5px;
          word-break: break-all;
          word-wrap: break-woed;
        }
      }
    }
  }
</style>
