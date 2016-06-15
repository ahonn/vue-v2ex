'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import filters from './filters';
import routerMap from './routers';

Vue.use(VueRouter);
Vue.use(VueResource);

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

let router = new VueRouter();

let app = Vue.extend({});
routerMap(router);

router.start(app, "#app");
