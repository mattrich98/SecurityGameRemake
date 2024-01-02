let gameTime = 0;
let gameScore = 0;
let gameLoop = 0;

console.log(Math.floor(Math.random() * 81));


function startGame() {
    console.log("test");
    gameIntervals();
    movePlayers();
    return "game started";
}

function gameIntervals(){
    if(gameLoop <= 19){
        gameLoop++
        }
        else if (gameloop >= 19){
        gameLoop= false;
    }
    console.log(gameLoop);
    return "Game Over";
}

function movePlayers() {
    console.log("movePlayers test")

    return "players moved places"
}
