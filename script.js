let gameTime = 0; //number for time that will increment as the game plays out.
let gameScore = 0; //number for the player's score that will increment.

function startGame() { //starts the game with nested functions
  gameIntervals(); //games timer function
  pointsSystem(); //gain or lose points function
  movePlayers(); //moving players function 
}

function gameIntervals() { 
  gameTime++; //gametime gets incremented +1 every second
  if (gameTime <= 20) { //if the game time is less than 20 seconds

    //Loops gameIntervals, 750 = time between
    setTimeout(gameIntervals, 750); //method to slow down the game timer.

    //link with HTML timer
    document.getElementById("timeNumber").innerHTML = gameTime; 
    document.getElementById("startButton").innerHTML = "Game Started";

    //stops play button press
    document.getElementById("startButton").onclick = false; 

    //stops setTimeout loop
  } else if (gameTime >= 20) {
    document.getElementById("startButton").innerHTML = "Game Over";
    alert("Game over! you scored: " + gameScore);
    //console.log("Game Over");
   
  }
}

function pointsSystem() {
    document.getElementById("person").addEventListener("click", function gainPoints() {
    gameScore+=1;
    //console.log(gameScore);
    document.getElementById("scoreNumber").innerHTML = gameScore;
    
});

    document.getElementById("enemy").addEventListener("click", function losePoints(){
    gameScore-=5;
    //console.log(gameScore);
    document.getElementById("scoreNumber").innerHTML = gameScore;
})
}

/*function movePlayers() {

  while (gameTime <= 20) {

    //makes enemy dissapear and reappear 
    document.getElementById("enemy").style.display = "none";
    document.getElementById("enemy").style.display = "inline";

    //slows down intervals
    setTimeout(movePlayers, 1000);

    //stops while loop
    if(gameTime == 20)
    break;
  }
}
*/