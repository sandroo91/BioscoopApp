// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'vue-resize/dist/vue-resize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Users from './components/Users'
import Test from './components/test'
import Programma from './components/Programma'
import Home from './components/Home'

import VueCarousel from 'vue-carousel';
import VueResize from 'vue-resize'
import { Dropdown } from 'bootstrap-vue/es/components';
import bDropdown from  'bootstrap-vue/es/components/dropdown/dropdown';
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
import { Carousel } from 'bootstrap-vue/es/components';
import bTable from 'bootstrap-vue/es/components/table/table';
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';

Vue.component('b-carousel-slide',bCarouselSlide);
Vue.component('b-carousel', bCarousel);
Vue.component('b-dropdown', bDropdown);
Vue.component('b-table', bTable);
Vue.use(VueCarousel);
Vue.use(bCarouselSlide);
Vue.use(VueResize);
Vue.use(Carousel);
Vue.use(Dropdown);
Vue.use(BootstrapVue);
Vue.use(vueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/Users', component: Users},
    {path: '/test', component: Test},
    {path: '/Programma', component: Programma},
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <body style="background-color: slategray;">
    <div id="app" style="margin-left: 50px; margin-right: 50px; background-color: slategray">
      <br>
        <h1 align="center">Welkom bij Retro Cinema</h1><span></span><img src="../src/assets/retrocinema.jpg" align="right" style="height: 150px; width: 150px;" alt="Logo" />
        <b-button variant="warning"><router-link to="/">Home</router-link></b-button>
        <b-button variant="warning"><router-link to="/Users">Users</router-link></b-button>
        <b-button variant="warning"><router-link to="/test">Test</router-link></b-button> 
        <b-button variant="warning"><router-link to="/Programma">Programma</router-link></b-button> 
      <router-view></router-view>
    </div>
  </body>
  `,
}).$mount('#app')
