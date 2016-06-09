<template>
  <Navbar
    :page-type="query.tab"
    :show-menu.sync="showMenu">
  </Navbar>
</template>

<script>
  export default {
    data () {
      return {
        showMenu: false,
        query: {
          tab: 'All'
        }
      }
    },
    components: {
      "Navbar": require('../components/navbar.vue')
    }
  }
</script>
