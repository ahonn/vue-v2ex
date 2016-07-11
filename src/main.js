'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routerMap from './routers'
import filters from './filters'

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

let router = new VueRouter()

var app = Vue.extend({})
routerMap(router)

router.start(app, "#app")