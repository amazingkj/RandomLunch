<template>

  <div class="putlist" shadow>
    <form v-on:submit.prevent="saveList" >
    <!-- <label for="id">id</label>
    <input type="text" name="id" v-model="restaurant.id"><br> -->

    <label for="rname">식당이름</label>
    <input type="text" name="rname" v-model="restaurant.rname"><br>

    <label for="MainMenu">대표메뉴</label>
    <input type="text" name="MainMenu" v-model="restaurant.MainMenu"><br>

    <label for="Distance">거리</label>
    <input type="text" name="Distance" v-model="restaurant.Distance"><br>

    <label for="Nat">메뉴국적</label>
    <input type="text" name="Nat" v-model="restaurant.Nat"><br>
   
    <div class="BtnContainer">
    <button type="submit" class="button btnPush btnBlueGreen">등록하기</button>
    </div>
    </form>
  </div>

</template>

<script>
export default {   
  data: function() {

  return {
         restaurant: {
               rname: '',
               MainMenu: '',
               Distance: '',
               Nat: '',
         }
      }
   },
    methods: {
        saveList:function(req,res){
              console.log(this.restaurant)
          this.$axios.post("/api/users/regist", {
            restaurant: this.restaurant,
          })
          //this.$router.push("/regist") 성공 한 뒤 보내려는 router 주소
          .then(res=> this.restaurant = res.data)          
          .catch(error => console.log(error));
          console.log(req);

          this.clearInput();
      
        },
         clearInput() {
         this.restaurant = '';
         }
    },   

   
}
</script>

<style>
.putlist{
   /*background: white;
 height: 50px;*/
  line-height: 50px;
  border-radius: 5px;
  
}

.putlist input {
  border-style: none;
  font-size: 1rem;
}
.putlist label {
  padding-right: 1rem;
  font-size: 0.8rem;
}


.addContainer {
  float: right;
  /*background: linear-gradient(to right, #6478FB, #8763FB);*/
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;

}
.addBtn {
  color: white;
  vertical-align: middle;
}
/*button*/
a.button {
  display: block;
  position: relative;
  float: left;
  width: 120px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #FFF;
  border-radius: 5px;
  transition: all 0.2s ;
}

.btnBlueGreen {
  background: #00AE68;
}
.btnBlueGreen.btnPush {
  box-shadow: 0px 5px 0px 0px #007144;
  
}.btnBlueGreen.btnFloat:before {
  background: #00AE68;
}
.btnPush:hover {
  margin-top: 15px;
  margin-bottom: 5px;
}


</style>