import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { Dropdown } from 'bootstrap-vue/es/components';
import { Carousel } from 'bootstrap-vue/es/components';

Vue.use(BootstrapVue)
Vue.use(Dropdown);
Vue.use(Carousel);


new Vue({
  el: '#app',
  render: h => h(App)
})
