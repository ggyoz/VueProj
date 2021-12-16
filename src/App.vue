<template>

  <div class="black-bg" v-if="frame1 == true" @click="frame_ctrl">
    <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세내용</p>
    </div>
  </div>

  <div class="menu">
    <a v-for="(nm,i) in menu" :key="i">{{nm}}</a>
  </div>  

  <div v-for="(plist, i) in products" :key="i">

    <h4>{{plist[0]}}</h4>
    <p>{{plist[1]}}</p>
    <button @click="increase(i)">버튼</button><span>count : {{count[i]}}</span>

  </div> 

  <div>
    <img class="room-img" src="./assets/room0.jpg" @click="frame_ctrl">
    <h4>강1</h4>
    <p>1000$</p>
    <button @click="increase()">버튼</button><span>count : {{count1}}</span>
  </div> 

  
</template>

<script>


export default {
  name: 'App',

  // 데이터 바인딩
  data(){
    return {
      frame1 : false,
      count1 : 0,
      count : [0, 0, 0,] ,
      menu : ['Home', 'Products', 'About',],
      products : [ ['역1', '100$'], ['천1', '200$'], ['마1', '300$'], ],
     
    }
  },
  methods : {
    increase(i){
      this.count[i]++;
    },

    frame_ctrl(){
      this.frame1 = !this.frame1;
    }
    
  },
  components: {
    
  }
}

</script>

<style>

body{
  margin: 0;
}

div{
  box-sizing:border-box;
}

.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}

.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding:20px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}

.menu{
background: darkslateblue;
padding: 15px;
border-radius: 5px;
}

.menu a{
  color:white;
  padding: 15px;
}

.room-img{
  width:90%;
  margin-top: 40px;
}

</style>
