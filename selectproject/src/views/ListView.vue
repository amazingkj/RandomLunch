<template>
  <div>
    <store-list></store-list>
    
  </div>
</template>

<script>
import StoreList from '../components/StoreList.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    StoreList,
  },

}
</script>

<style>

</style>