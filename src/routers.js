'use strict'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: function (resolve) {
        require(['./views/list.vue'], resolve);
      }
    },
    '/list': {
      name: 'list',
      component: function (resolve) {
        require(['./views/list.vue'], resolve);
      }
    },
    '/topic/:id': {
      name: 'topic',
      component: function (resolve) {
        require(['./views/topic.vue'], resolve);
      }
    },
    '/nodes': {
      name: 'nodes',
      component: function (resolve) {
        require(['./views/nodes.vue'], resolve);
      }
    },
    '/node/:id': {
      name: 'node',
      component: function (resolve) {
        require(['./views/list.vue'], resolve);
      }
    }
  })
}
