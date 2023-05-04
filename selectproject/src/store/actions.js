
import { fetchSCNTList,fetchSList } from '../api/index.js'

export default {
    async FETCH_STORE({ commit }){
        try {
         const response = await fetchSList();
         commit('SET_STORE', response.data);
         return response;
        } catch (error) {
         console.log(error);        
        }
     },
    async FETCH_COUNT({ commit }){
        try {
         const response = await fetchSCNTList();
         commit('SET_COUNT', response.data);
         return response;
        } catch (error) {
         console.log(error);        
        }
     },
/*      FETCH_STORE({ commit }, item) {
        fetchSList(item) 
        .then(({ data }) => {//response.data
            console.log(data); 
            commit('SET_STORE', data);
        })
        .catch(error => {
            console.log(error);
        });
    }, */
/*     FETCH_COUNT({ commit }, item) {
        fetchSCNTList(item) 
        .then(({ data }) => {//response.data
            console.log(data); 
            commit('SET_COUNT', data);
        })
        .catch(error => {
            console.log(error);
        });
    }, */
     fiveMinuteList() {

     },
     tenMinuteList() {

     },
     fifteenMinuteList(){

     }
}