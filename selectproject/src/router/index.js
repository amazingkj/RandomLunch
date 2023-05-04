import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import AddView from '../views/AddView.vue';
import ListView from '../views/ListView.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode:'history',
 routes:[
  {
    path:'/',
    redirect:'/home',
    
  },
  {
    path: '/home',
    //name:'home',
    component: HomeView,
  },
  {
    path: '/about',
    //name:'about',
    component: AboutView,
  },
  {
    path: '/add',
    //name:'add',
    component: AddView,
  },
  {
    path: '/list',
    name:'list',
    component: ListView,
  },
]

});
