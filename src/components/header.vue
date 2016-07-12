<template>
  <div class="fixed">
    <x-header :left-options="{showBack: showBack}">{{ pageTitle }}</x-header>
  
    <tab :line-width="2" active-color="#334" v-if="showTab">
      <tab-item :selected="tabData.active === item.name" v-for="item in tabData.list" @click="tabData.active = item.name">
        <span v-text="item.title" v-link="{ name: 'list', query: { tab: item.name } }"></span>
      </tab-item>
    </tab>
  </div>
</template>

<script>
  import XHeader from 'vux/dist/components/x-header' 
  import Tab from 'vux/dist/components/tab'
  import TabItem from 'vux/dist/components/tab-item'

  export default {
    props: ['pageTitle', 'showBack', 'showTab'],
    data () {
      return {
        tabData: {
          active: 'latest',
          list: [
            {
              title: '最新',
              name: 'latest'
            },
            {
              title: '最热',
              name: 'hot'
            }, 
            {
              title: '技术',
              name: 'tech'
            },
            {
              title: '创意',
              name: 'ideas'
            }
          ]
        }
      }
    },
    components: {
      XHeader,
      Tab,
      TabItem
    }
  }
</script>

<style lang="less">
  .fixed {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
  }

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