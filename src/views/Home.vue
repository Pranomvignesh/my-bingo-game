<template>
  <div class="home">
    <h1> BINGO ! </h1>
    <div class='pagelayout'>
      <div v-if="mainPage" class='mainPage'>
        <Homepage v-on:openGameArea="openGameArea($event)" ></Homepage>
        <Helppage></Helppage>
      </div>
      <div v-else class='gamePage'>
        <button 
          v-on:click="goBackToMainPage"
          class="btn back">
          Go Back
        </button>
        <div>
          Game is yet to be developed
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue';
import Helppage from '@/components/Helppage.vue';

export default {
  name: 'Home',
  data(){
    return {
      mainPage : true
    }
  },
  components: {
    Homepage,
    Helppage
  },
  methods:{
    openGameArea : function(){
      this.mainPage = false;
      console.log(arguments);
    },
    goBackToMainPage : function(){
      this.mainPage = true;
    }
  }
}
</script>

<style lang="less">
.pagelayout{
  display: flex;
  flex-direction: column;
  height: 100%;
  .mainPage,.gamePage{
    flex : 1 1 100%;
  }
}
.home{
    display: flex;
    height: 100%;
    width: calc(100% - 10px);
    overflow-x: hidden;
    flex-direction: column;
}
@media (min-width:500px){
  .home{
    margin: 0 auto;
    width : 500px;
  }
}
.btn{
  cursor: pointer;
  border: none;
  color:white;
  padding : 5px 10px;
  &.createNew{
      background:#4CAF50;
      margin-right:10px;
  }
  &.join{
      background: #FB8C00;
  }
  &.back{
    background: #424242;
  }
}
</style>
