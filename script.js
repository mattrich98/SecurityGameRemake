let gameTime = 0;
let gameScore = 0;
//let gameBoard = document.querySelector("#Board") = 0;

console.log(Math.floor(Math.random() * 81));

function startGame() {
    gameIntervals();
    movePlayers();
    return "game started";
    
}

function gameIntervals(){
    gameTime++
    if(gameTime <= 5){
        setTimeout(gameIntervals, 750); //Loops gameIntervals, 750 = time between
       
        console.log(gameTime); 
        document.getElementById("startButton").innerHTML = "Game Started";
        document.getElementById("startButton").onclick = false;//stops play button press
    }

    else if (gameTime >= 5){
        console.log("Game Over");
        document.getElementById("startButton").innerHTML = "Play again?";
        }
        
    }

function movePlayers() {
    //gameBoard.children(Math.floor(Math.random() * 81));
    return "players moved places"
}


//if(gameLoop == 60){ --- cant slow down loop so needs to be if/else
//    gameLoop == 60
//  }
//  else if (gameLoop == 60){
//      gameLoop= 60;
//}

/*
    for (let i = 0; i <= 60; i ++ ){
*/