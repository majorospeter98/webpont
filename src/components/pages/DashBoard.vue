<template>
<div>
    
     <section>
              
        <ul v-if="filteredUsers">
<li v-for="user in filteredUsers" :key="user.token"> 
 <h1> {{user.email}} </h1>
  {{user.password}}
</li>
        </ul>
<h3 v-else>No users found</h3>
<p v-if=!error>{{error}}</p>
<router-link to="/login">Logout</router-link>
    </section>
</div>
</template>
<script>

export default {
  components: {   },
    data(){
    
        return {

        }
    },
      computed: {
      filteredUsers(){
        console.log(this.$store.getters['users/users'])
        return this.$store.getters['users/users']
       
},
   
      
      hasCoaches(){
return this.$store.getters['users/hasUsers']
    },
    isUser(){
    return this.$store.getters['users/isUser']
},
    },
    
   created(){
    this.loadUsers();
   },

    methods:{

loadUsers(){
  try{
  this.$store.dispatch('users/loadUsers')
  } catch (error) {
this.error="Nem sikerült a fetch";
  }
}

    },
    
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>