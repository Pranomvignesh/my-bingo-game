<template>
  <div class="homePage">
    <button 
        v-on:click="createNewGame"
        class="btn createNew">
        Create New Game
    </button>
    <button 
        v-on:click="getGameId"
        class="btn join">
        Join Game
    </button>
  </div>
</template>

<script>
export default {
    methods : {
        createNewGame : function(){
            const gameId = '1234'; // have to make a network call for this
            this.$emit('openGameArea',gameId);
        },
        getGameId : function(){
            let gameId = prompt('Please enter the game id : ');
            const numberRegex = /\d{4}/;
            if(gameId !== null){
                if(!numberRegex.test(gameId)){
                    let invalidGameId = true;
                    while(invalidGameId){
                        gameId = prompt('Invalid Game ID!. Please re-enter game id : ');
                        if(gameId === null || numberRegex.test(gameId)){
                            invalidGameId = false;
                        }
                    }
                }
                if(gameId){
                    // have to make network call to verify this game id 
                    this.$emit('openGameArea',gameId);
                }
            }
        }
    }
}
</script>

<style lang="less">
.homePage{
    display: flex;
}
</style>