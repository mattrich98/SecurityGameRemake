let gameTime = 0;
let gameScore = 0;
//let gameBoard = document.querySelector("#Board") = 0;

console.log(Math.floor(Math.random() * 81)); //there are 9x9 squares//

function startGame() {
  gameIntervals();
  movePlayers();
  return "game started";
}

function gameIntervals() {
  gameTime++;
  if (gameTime <= 20) {
    setTimeout(gameIntervals, 750); //Loops gameIntervals, 750 = time between
    console.log(gameTime);
    document.getElementById("timeNumber").innerHTML = gameTime; //link with HTML timer
    document.getElementById("startButton").innerHTML = "Game Started";
    document.getElementById("startButton").onclick = false; //stops play button press
  } else if (gameTime >= 20) {
    //stops setTimeout loop
    alert("Game over! you scored: " + gameScore);
    console.log("Game Over");
    //document.getElementById("startButton").innerHTML = "Click below to play again";
    location.reload();
  }
}

function movePlayers() {
  //gameBoard.children(Math.floor(Math.random() * 81));
  return "players moved places";
}

/*function refreshPage() {
    console.log("refreshed page");
    location.reload();
}/*

//if(gameLoop == 60){ --- cant slow down loop so needs to be if/else
//    gameLoop == 60
//  }
//  else if (gameLoop == 60){
//      gameLoop= 60;
//}

/*
    for (let i = 0; i <= 60; i ++ ){
*/
