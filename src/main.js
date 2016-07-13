'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Hljs from 'highlight.js'

import routerMap from './routers'
import filters from './filters'

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.directive('highlightjs', function() {
  let blocks = this.el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
})

Vue.config.debug = true

var app = Vue.extend({})
let router = new VueRouter()
routerMap(router)

router.start(app, "#app")