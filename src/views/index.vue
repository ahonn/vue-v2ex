<template>
  <Navbar
    :page-type="searchKey.tab"
    :show-menu.sync="showMenu">
  </Navbar>

  <section id="page">
    <ul>
      <li v-for="item in topics">
        <span v-text="item.title"></span>
      </li>
    </ul>
  </section>
</template>

<script>
  import $ from 'webpack-zepto';

  export default {
    data () {
      return {
        showMenu: false,
        topics: [],
        searchKey: {
          tab: 'latest'
        }
      }
    },
    route: {
      data (transition) {
        let query = transition.to.query,
            tab = query.tab || 'latest';

        this.getTopics();
      }
    },
    methods: {
      getTopics (searchKey) {
        let params = this.searchKey.tab;

        $.getJSON('http://localhost:8080/' + params + '.json', (data) => {
          this.topics = data;
        })
      }
    },
    components: {
      "Navbar": require('../components/navbar.vue')
    }
  }
</script>
