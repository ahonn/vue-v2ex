'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';
import filters from './filters';
import routerMap from './routers';
import $ from 'webpack-zepto';

Vue.use(VueRouter);

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

$.ajaxSettings.crossDomain = true;

let router = new VueRouter();

let app = Vue.extend({});
routerMap(router);

router.start(app, "#app");
