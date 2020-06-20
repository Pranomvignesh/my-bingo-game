class User{
    constructor(name,socket){
        this.name = name;
        this.socket = socket;
    }
    changeName(name){
        this.name = name;
    }
    isPlayingIn(gameId){
        this.gameId = gameId;
    }
    hasLeftGame(){
        this.gameId = null;
    }
}

module.exports = User;