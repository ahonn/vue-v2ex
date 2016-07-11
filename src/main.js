'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routerMap from './routers'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter()

var app = Vue.extend({})
routerMap(router)

router.start(app, "#app")