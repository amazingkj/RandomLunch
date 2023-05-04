<template>
  <div class="home">    
    <first-select></first-select>

  </div>
</template>

<script>
// @ is an alias to /src
import FirstSelect from '../components/FirstSelect.vue';

export default {
  name: 'HomeView',
  components: {
    FirstSelect
  }
}
</script>
