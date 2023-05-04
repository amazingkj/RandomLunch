<template>
    <div class="header">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/add">Add</router-link>  |
      <router-link to="/list">List</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: white;
  display: flex;
  padding: 8px;
}
.header router-link-exact-active {
  color: #35495e;
}


div {
  padding: 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
}

div a.router-link-exact-active {
  color: #42b983;
}
</style>