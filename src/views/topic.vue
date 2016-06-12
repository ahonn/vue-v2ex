<template>
  <Navbar
    :page-type=" 'topic' | getTitleStr"
    :show-menu.sync="showMenu">
  </Navbar>

  <section id="page">
    <h2 class="topic-title" v-text="topic.title"></h2>
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
    margin-top: 44px;
  }
</style>
