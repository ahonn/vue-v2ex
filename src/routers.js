'use strict'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: function (resolve) {
        require(['./views/index.vue'], resolve);
      }
    }
  })
}
