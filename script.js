let gameTime = 0;
let gameScore = 0;
let gameBoard = document.querySelector("#Board") = 0;

console.log(Math.floor(Math.random() * 81));


function startGame() {
    gameIntervals();
    movePlayers();
    return "game started";
}

function gameIntervals(){
    for (let i = 0; i <= 60; i++){
        console.log(i);
    }
    if (i = 60){
    console.log("Game Over");
    gameIntervals = false;
    }
}

function movePlayers() {
    return "players moved places"
}



//if(gameLoop == 60){
//    gameLoop == 60
//  }
//  else if (gameLoop == 60){
//      gameLoop= 60;
//}
