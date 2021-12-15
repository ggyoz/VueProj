<template>

  <div class="menu">
    <a v-for="(nm,i) in menu" :key="i">{{nm}}</a>
  </div>  

  <div v-for="i in products" :key="i">

    <h4>{{i[0]}}</h4>
    <p>{{i[1]}}</p>

  </div> 

  <div>
    <h4>강1</h4>
    <p>1000$</p>
    <button @click="count++">버튼</button><span>count : {{count}}</span>
  </div>

  
</template>

<script>


export default {
  name: 'App',

  // 데이터 바인딩
  data(){
    return {
      count : 0,
      menu : ['Home', 'Products', 'About'],
      products : [ ['역1', '100$'], ['천1', '200$'], ['마1', '300$'], ],
     
    }
  },
  components: {
    
  }
}

</script>

<style>
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

</style>
