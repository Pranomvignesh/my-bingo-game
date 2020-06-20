const error = require('./error');
const uuid = require('./uuid');
const defaultConfig = {
    noOfPlayers : 5
}
error.addMessages({
    PLAYER_LIMIT_EXCEEDED : 'Please ask the host to increase the player limit',
    PLAYER_DOESNT_EXIST   :  playerName => 'The player named '+playerName+' does not exist in this game'
})
class Game{
    constructor({name,config}){
        this.hostname = name;
        this.gameConfig = Object.assign(defaultConfig,config);
        this.id = uuid.forGame();
        this.players = [name];
        this.state = {
            leaderBoard : [],
            chatTree : []
        };
    }
    addPlayer(newPlayer){
        const players = this.players;
        if(this.gameConfig.noOfPlayers > players.length){
            players.push(newPlayer)
        }else{
            error.emit(error.label.PLAYER_LIMIT_EXCEEDED);
        }
    }
    removePlayer(playerToRemove){
        const players = this.players;
        const index = players.indexOf(playerToRemove);
        if(index !== -1){
            players.splice(index,1);
        }else{
            error.emit(error.label.PLAYER_DOESNT_EXIST);
        }
    }
}
module.exports = Game;