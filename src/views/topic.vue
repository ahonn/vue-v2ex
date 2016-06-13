<template>
  <Navbar
    :page-type=" 'topic' | getTitleStr"
    :show-menu.sync="showMenu">
  </Navbar>

  <section id="page">
    <h2 class="topic-title" v-text="topic.title"></h2>
    <section class="topic-info">
      <img :src="topic.member.avatar_normal" />
      <span class="author" v-text="topic.member.username" ></span>
      <time> 发布于：2小时前 </time>
    </section>
    <section class="topic-content">
      <span v-text="topic.content"></span>
    </section>
  </section>
</template>

<script>
  import $ from 'webpack-zepto';

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

        this.getTopics(topicId);
        this.showMenu = false;
      }
    },
    methods: {
      getTopics (topicId) {
        $.getJSON('./api/show.json', (data) => {
          console.log(data[0]);
          if (data) {
            this.topic = data[0];
          }
        })
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
      font-size: 14px;

      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
      }

      span {
        display: inline-block;
        position: relative;
        top: -25px;
      }

      time {
        position: relative;
        left: -35px;
        top: -5px;
      }
    }

    .topic-content {
      margin: 30px 15px;
    }
  }
</style>
