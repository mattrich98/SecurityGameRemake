let gameTime = 0;
let gameScore = 0;
const personBlock = getElementById("person"); 
const enemyBlock = getElementById("enemy");

function startGame() {
  gameIntervals();
  pointsSystem();
  movePlayers();
  return "game started";
}

function gameIntervals() {
  gameTime++;
  if (gameTime <= 20) {
    setTimeout(gameIntervals, 750); //Loops gameIntervals, 750 = time between
    document.getElementById("timeNumber").innerHTML = gameTime; //link with HTML timer
    document.getElementById("startButton").innerHTML = "Game Started";
    document.getElementById("startButton").onclick = false; //stops play button press

  } else if (gameTime >= 20) {
    //stops setTimeout loop
    document.getElementById("startButton").innerHTML = "Game Over";
    alert("Game over! you scored: " + gameScore);
    console.log("Game Over");
    //document.getElementById("startButton").innerHTML = "Click below to play again";
    location.reload();
  }
}

function pointsSystem() {
document.getElementById("person").addEventListener("click", function gainPoints() {
    gameScore++;
    console.log(gameScore);
    document.getElementById("scoreNumber").innerHTML = gameScore;
});

document.getElementById("enemy").addEventListener("click", function losePoints(){
    gameScore--;
    gameScore--;
    console.log(gameScore);
    document.getElementById("scoreNumber").innerHTML = gameScore;
})
}

function movePlayers() {

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
