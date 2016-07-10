<template>
  <div class="topics">
    <div class="topic-item" v-for="topic in topics">
      <div class="avatar">
        <img :src="topic.member.avatar_normal" :alt="topic.member.username" />
      </div>
      <div class="content">
        <h3 v-text="topic.title"></h3>
        <div class="info">
          <span class="node" v-text="topic.node.title"></span>
          <span class="author" v-text="topic.member.username"></span>
          <span class="created" v-text="topic.created "></span>
          <span class="replies" v-text="topic.replies"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['topics'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="less"> 
  .topics {
    margin: 0px 15px 65px;

    .topic-item {
      padding: 15px 0px;
      border-bottom: 1px #ddd solid; 

      .avatar {
        float: left;
        padding-right: 15px;

        img {
          width: 40px;
          border-radius: 50%;
        }
      }

      .content {
          
        h3 {
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
          white-space:nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .info {
          color: #888;
          margin-top: 5px;
          font-size: 12px;

          .author {
            font-size: 13px;
          }

          .node::after,
          .author::after {
            content: "-";
            margin-left: 3px;
          }

          .replies {
            float: right;
            padding: 0px 8px;
            background-color: #ddd;
            border-radius: 10px;
          }
        }
      }
    }
  
  }
</style>