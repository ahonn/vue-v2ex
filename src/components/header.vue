<template>
  <x-header :left-options="{showBack: false}">{{ pageTitle }}</x-header>

  <sticky>
    <tab :line-width="2" active-color="#334" v-if="showTab">
      <tab-item :selected="active === item" v-for="item in tablist" @click="active = item">
        <span v-text="item" v-link="{ name: 'list', query: { tab: item } }"></span>
      </tab-item>
    </tab>
  </sticky>
</template>

<script>
  import XHeader from 'vux/dist/components/x-header' 
  import Sticky from 'vux/dist/components/sticky' 
  import Tab from 'vux/dist/components/tab'
  import TabItem from 'vux/dist/components/tab-item'

  export default {
    props: ['pageTitle', 'showTab'],
    data () {
      return {
        active: 'latest',
        tablist: ['latest', 'hot', 'tech', 'ideas']
      }
    },
    components: {
      XHeader,
      Sticky,
      Tab,
      TabItem
    }
  }
</script>

<style lang="less">
  .vux-tab {
    height: 35px;

    .vux-tab-item {
      line-height: 35px;
    }
  }

  .vux-header .vux-header-title, .vux-header h1 {
    margin-left: 88px;
  }
</style>