<template>
  <div class="users">
    <h1>users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="vul uw naam in">
      <br />
      <input type="text" v-model="newUser.email" placeholder="vul uw emailadres in">
      <br />
      <input type="submit" value="Opslaan">
    </form>
    <ul>
      <li v-for="user in users"> <input type="checkbox" class="toggle" v-model="user.gemaild">
        <span :class="{gemaild: user.gemaild}">
        {{user.name}}:{{user.email}}
          <button v-on:click="verwijderGebruiker(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data(){
      return {
        newUser:{},
        users: []
      }
    },
    methods: {
      addUser: function(e){
        console.log('voeg toe');
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          gemaild: false
        });
        e.preventDefault();
      },
      verwijderGebruiker: function(user){
        this.users.splice(this.users.indexOf(user),1);
      }
    },
    created: function(){
        this.$http.get('http://jsonplaceholder.typicode.com/users')
          .then(function(response){
            this.users = response.data;
          });
    }
  }
</script>

<style scoped>
  .gemaild{
    text-decoration: line-through;
  }
</style>
