<!--<template>-->
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'app',-->
  <!--data () {-->
    <!--return {-->
      <!--msg: 'Welcome to Your Vue.js App'-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->

<!--h1, h2 {-->
  <!--font-weight: normal;-->
<!--}-->

<!--ul {-->
  <!--list-style-type: none;-->
  <!--padding: 0;-->
<!--}-->

<!--li {-->
  <!--display: inline-block;-->
  <!--margin: 0 10px;-->
<!--}-->

<!--a {-->
  <!--color: #42b983;-->
<!--}-->
<!--</style>-->
<template>
  <div class="container">
    <app-buttons></app-buttons>
    <app-dropdown></app-dropdown>
    <app-header></app-header>
    <app-timetable></app-timetable>
    <br>
    <br>
    <br>
    <app-carousel></app-carousel>


    <!--<div class="row">-->
    <!--<app-servers></app-servers>-->
    <!--<app-server-details></app-server-details>-->
    <!--</div>-->


  </div>
</template>

<script>
    import TimeTable from './TimeTable.vue';
    import Home from './Home.vue';
    import DropDown from './DropDown.vue';
    import Carousel from './Carousel.vue';
    import Buttons from './Buttons.vue';

    export default {
        components: {
          appHeader: Home,
            //'app-header': Home,
          'app-timetable': TimeTable,
            'app-dropdown': DropDown,
            'app-buttons': Buttons,
            'app-carousel': Carousel


        }
    }
</script>

<style >

</style>






