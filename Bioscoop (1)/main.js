// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Users from './components/Users'
import Test from './components/test'
import Programma from './components/Programma'

import { Dropdown } from 'bootstrap-vue/es/components';
import bDropdown from  'bootstrap-vue/es/components/dropdown/dropdown';
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
import { Carousel } from 'bootstrap-vue/es/components';
import bTable from 'bootstrap-vue/es/components/table/table';

Vue.use(Carousel);
Vue.component('b-carousel', bCarousel);
Vue.component('b-dropdown', bDropdown);
Vue.component('b-table', bTable);
Vue.use(Dropdown);
Vue.use(BootstrapVue);
Vue.use(vueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test},
    {path: '/Programma', component: Programma}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <br>
        <h1 align="center">Welkom bij Vue Cinema</h1><img id="logo" src="./assets/logo.png" height="123px" width="123px" align="right">
        <button><router-link to="/">Users</router-link></button>
        <button><router-link to="/test">Test</router-link></button> 
        <button><router-link to="/Programma">Programma</router-link></button> 
      
      <router-view></router-view>
    </div>
  `,
}).$mount('#app')
