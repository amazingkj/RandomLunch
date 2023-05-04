<template>
   <div class="BtnContainer">
    <a href="" title="Button push blue/green"
     class="button btnPush btnBlueGreen" v-on:click="fiveMinuteList">5분</a>
    <a href="" title="Button push blue/green"
     class="button btnPush btnBlueGreen" v-on:click="tenMinuteList">10분</a>
    <a href="" title="Button push blue/green"
     class="button btnPush btnBlueGreen" v-on:click="fifteenMinuteList">15분</a>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.BtnContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 0 auto;
  /* 추가 */
  display: block;
}


body {
  font-size: px;
  line-height: 24px;
  color: #333;
  background: #ececec;
  overflow-y: scroll;
}

p {
  margin-bottom: 0.5em;
}

a,
a:visited {
  text-decoration: none;
  color: #00AE68;
}

.clear {
  clear: both;
}

.pageTitle {
  font-size: 2em;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1em;
  color: #00AE68;
}

.pageSubTitle {
  margin-bottom: 0.5em;
  font-size: 1.3em;
  font-weight: 700;
  line-height: 1em;
  color: #222;
}

.articleTitle {
  font-size: 1.15em;
  font-weight: 700;
  line-height: 1em;
  color: #222;
}

.wrapper {
  width: 600px;
  margin: 20px auto;
}

.container {
  padding-top: 1em;
  margin-top: 1em;
  border-top: 
    solid
    1px
    #CCC;
}

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