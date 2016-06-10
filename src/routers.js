'use strict'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: function (resolve) {
        require(['./views/list.vue'], resolve);
      }
    },
    '/topic/:id': {
      name: 'topic',
      component: function (resolve) {
        require(['./views/list.vue'], resolve);
      }
    }
  })
}
