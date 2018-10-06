<template>
  <div class="Test">
    <input type="text" v-model="title"><br />
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Nobody</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="Groet">Welkomstboodschap</button>
    <br />
    <input type="text" v-on:keyup="drukKnop" v-on:keyup.enter="enterIngedrukt">
    <hr />
    <label>voornaam</label><input type="text" v-model="user.firstName">
    <label>achternaamnaam</label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
      name: 'Test',
      props: {
        msg: {
          default:'Foobar'
        }
      },
    data(){
      return {
        title: 'Hello World',
        user: {
          firstName: 'Robert',
          lastName: 'Kuijpers'
        },
        showName: false,
        items:[
          {title:'film 1'},
          {title: 'film 2'},
          {title: ' film 3'}
        ]
      }
    },
    methods: {
      Groet: function(){
        alert('hallo domoor');
      },
      drukKnop: function(e){
        console.log(e.target.value);
      },
      enterIngedrukt: function(){
        console.log('Je hebt enter ingedrukt!');
      }
    },
    computed: {
      fullName: function(){
        return this.user.firstName + " " + this.user.lastName;
      }
    }
  }
 </script>

 <style scoped>

 </style>
