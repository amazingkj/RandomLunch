import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import { router } from './router/index.js';
import { store } from './store/store.js';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
