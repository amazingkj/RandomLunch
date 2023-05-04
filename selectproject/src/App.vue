<template>
  <div id="app">
<!--          <transition name="page"> -->
    <select-header></select-header>
    <router-view></router-view>
<!--          </transition>  -->
  </div>
</template>
<script>
import SelectHeader from '../src/components/SelectHeader.vue'

export default {
  components: {
    SelectHeader
  
  },
}



</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
  background-color: blanchedalmond;
}

a {
  color: #34495e;
  text-decoration: none;

}

a:hover {
  color: #42b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
