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
        <time> 发布于：2小时前 </time>
      </div>
    </section>
    <section class="topic-content" v-html="topic.content_rendered">
    </section>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        showMenu: false,
        topic: {}
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
        let url = './api/topics/show.json';

        this.$http.get(url).then(function (response) {
          if (response.data) {
            this.topic = response.data[0];
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
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
      }

      .col {
        display: inline-block;
        position: relative;
        top: -5px;

        span {
          display: block;
          width: 100%;
          padding-bottom: 5px;
        }

        time {
          font-size: 14px;
          padding-top: 5px;
        }
      }
    }

    .topic-content {
      margin: 30px 15px;

      img {
        width: 100%;
      }
    }
  }
</style>
