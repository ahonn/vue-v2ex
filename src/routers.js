'use strict'

export default function (router) {
  router.map({
    '/': {
      name: 'index',
      component: function (resolve) {
        require(['./views/index.vue'], resolve)
      }
    },
    '/list': {
      name: 'list',
      component: function (resolve) {
        require(['./views/list.vue'], resolve)
      }
    }
  })
}
