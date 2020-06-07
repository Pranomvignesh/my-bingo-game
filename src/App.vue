<template>
  <div id="app">
    <router-view/>
    <h6 class="devInfo">
      This game is developed by Pranomvignesh (pranomvignesh@gmail.com)
    </h6>
  </div>
</template>

<style lang="less">
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  position: absolute;
  left : 0;
  top : 0;
  right : 0;
  bottom : 0;
  padding:10px;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  .devInfo{
    text-align:center;
  }
}
body{
  margin:0;
}

</style>
