<template>
    <tabbar>
      <tabbar-item v-for="item in tabbar" v-link="{ name: item.link }">
        <img slot="icon" :src="item.src">
        <span slot="label" v-text="item.name"></span>
      </tabbar-item>
    </tabbar>
</template>

<script>
  import Tabbar from 'vux/dist/components/tabbar'
  import TabbarItem from 'vux/dist/components/tabbar-item'

  export default {
    data () {
      return {
        tabbar: [
          {
            name: "全部",
            link: "list",
            src: "http://7xqvel.com1.z0.glb.clouddn.com/all.png"
          },
          {
            name: "节点",
            src: "http://7xqvel.com1.z0.glb.clouddn.com/node.png"
          },
          {
            name: "关于",
            src: "http://7xqvel.com1.z0.glb.clouddn.com/about.png"
          }
        ]
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style lang="less">
  .weui_tabbar {
    position: fixed;
  }
  
  .weui_tabbar_label {
    margin-bottom: 5px;
    font-size: 10px;
  }

  .weui_tabbar_item {
    text-decoration: none;
  }

  .weui_tabbar_item.weui_bar_item_on .weui_tabbar_label {
    font-size: 600;
    color: #334;
  }

  .weui_tabbar_icon {
    width: 18px;
    height: 18px;
  }
</style>