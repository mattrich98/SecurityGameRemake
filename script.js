let gameTime = 0;
let gameScore = 0;
let gameLoop = 0;
let gameBoard = document.querySelector("#Board") = 0;

console.log(Math.floor(Math.random() * 81));


function startGame() {
    console.log("test");
    gameIntervals();
    movePlayers();
    return "game started";
}

function gameIntervals(){
    if(gameLoop <= 59){
        gameLoop++
        }
        else if (gameLoop == 60){
        gameLoop= 60;
    }
    console.log(gameLoop);
    return "Game Over";
}

function movePlayers() {
    console.log("movePlayers test")
    
    return "players moved places"
}
