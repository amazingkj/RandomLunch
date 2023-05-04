import axios from "axios";

//1. HTTP Request & Response와 관련된 기본 설정 
const config = {
    baseUrl:'http://localhost:3002/'
}
//2. API 함수들을 정리 
function fetchSList() {
   return axios.get(`${config.baseUrl}api/users/rlist`);
}

function fetchSCNTList() {
    return axios.get(`${config.baseUrl}api/users/rlistcnt`);
}


//1. HTTP Request & Response와 관련된 기본 설정 

/* //2. API 함수들을 정리 
function fetchSList() {
   return axios.get(`/api/users/rlist`);
}

function fetchSCNTList() {
    return axios.get(`/api/users/rlistcnt`);
}


 */


export {
    fetchSList,
    fetchSCNTList,

}
