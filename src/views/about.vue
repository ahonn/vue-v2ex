<template>
  <v-header :page-title="pageTitle"></v-header>
  
  <section id="about">
    <dl class="info">
      <dt>关于 vue-v2ex</dt>
      <dd>该项目是基于 V2EX 的 API, 使用 Vue.js 完成的 Web App</dd>
      <dt>项目源码</dt>
      <dd><a href="https://github.com/ahonn/vue-v2ex">https://github.com/ahonn/vue-v2ex</a></dd>
      <dt>意见反馈</dt>
      <dd><a href="https://github.com/ahonn/vue-v2ex/issues/new">发表意见或者提出需求</a></dd>
    </dl>
  </section>

  <v-tabbar></v-tabbar>  
</template>

<script>
  import vHeader from '../components/header.vue'
  import vTabbar from '../components/tabbar.vue'

  export default {
    data () {
      return {
        pageTitle: "关于"
      }
    },
    components: {
      "v-header": vHeader,
      "v-tabbar": vTabbar
    }
  }
</script>

<style lang="less"> 
  @import '~vux/dist/vux.css';

  #about {
    margin: 46px 15px 48px;

    .info {
      padding-top: 15px;
      color: #334;

      dt {
        padding: 5px 0px;
        font-size: 18px;
      }

      dd {
        margin-left: 0;
        padding-bottom: 10px;
        color: #555;
        border-bottom: 1px #ddd solid; 
      }

      a {
        color: #35495e;
        text-decoration: none;
      }
    }
  }
</style>