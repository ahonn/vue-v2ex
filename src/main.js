'use strict'

import Vue from 'Vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routerMap from './routers'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  history: true
})


var app = Vue.extend({})
routerMap(router)

router.start(app, "#app")