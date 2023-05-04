import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        stores: {},
        count: {},
 
    },    
    getters: {
        fetchedStore(state) {
            return state.stores;
        },
        fetchedCount(state) {
            return state.count;
        }
    },
    mutations,
    actions,

});