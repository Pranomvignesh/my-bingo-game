function uuid(format){
    return format.replace(/[xy]/g,function(char){
        let random = Math.random() * 16 | 0;
        let uniqueString = char === 'x' ? random : (random & 0x3 | 0x8 );
        return uniqueString.toString(16);
    })
}
const idFormatFor = {
    game : 'game-xyxy',
    user : 'user_xxyy'
}
class UUID{
    forGame(){
        return uuid(idFormatFor.game)
    }
    forUser(){
        return uuid(idFormatFor.user)
    }
}

module.exports = new UUID;