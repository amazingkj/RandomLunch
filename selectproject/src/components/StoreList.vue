<template>
  <!-- <div>store list</div> -->  <div>

    <ul class="new-list">
        <li class="post" v-for="item in listItems"></li>
        {{this.$store.state}}
    </ul>
   <!--  <div v-for="restaurant in restaurants" v-bind:key="restaurant.id" > {{restaurant.name}}  </div>   -->
 <div > {{ totalpage }}  </div>  
<!-- <h2>No. {{index + 1}}</h2> -->
<!--    <dl>
      <dt>식당이름</dt></dt></dt>
      <dd>{{restaurant.rname}}</dd>
      <dt>이름</dt>
      <dd>{{restaurant.Distance}}</dd>
   </dl>
 -->
   </div> 
</template>

<script>

export default {
  created() {
  console.log(this.$route.path);
   const name = this.$route.name;
    if (name === 'list'){
    this.$store.dispatch('FETCH_STORE');
    this.$store.dispatch('FETCH_COUNT');
  }
  },
  computed: {
    listItems() {
     const name = this.$route.name;
     console.log(name);
   if (name === 'list'){
     return this.$store.state;   
   } else if (name === 'list'){
     return this.$store.state.count;
   } 
  },
   totalpage(){
   if(this.cnt == 0) {	// 현재 게시판 글 갯수가 0개일때 총 페이지가 0이 되는거 방지
     return 1;
   }else {
     return Math.ceil(this.cnt/10);    // (글 갯수/10)한 후 올림 연산을 통해 총 페이지 계산
   }
  },
  }
}
</script>

<style>

</style>