'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './routers';

Vue.use(VueRouter);

$.ajaxSettings.crossDomain = true;

let router = new VueRouter();

let app = Vue.extend({});
routerMap(router);

router.start(app, "#app");
