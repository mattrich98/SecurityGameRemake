let gameTime = 0; //number for time that will increment as the game plays out.
let gameScore = 0; //number for the player's score that will increment.

function startGame() { //starts the game with nested functions
  gameIntervals(); //games timer function
  pointsSystem(); //gain or lose points function
  dissapearingPlayers(); //dissapearing and reappearing players function 
}

function gameIntervals() { 
  gameTime++; //gametime gets incremented +1 every second
  if (gameTime <= 20) { //if the game time is less than 20 seconds, below will occur

    //Loops gameIntervals, 750 = time between
    setTimeout(gameIntervals, 750); //method to slow down the game timer.

    //link with HTML timer
    document.getElementById("timeNumber").innerHTML = gameTime; //links the gameTime variable with HTML timer div
    document.getElementById("startButton").innerHTML = "Game Started"; //changes the start button inner letters

    //stops play button press
    document.getElementById("startButton").onclick = false; //so you can only click the play button once to the start game

    //stops setTimeout loop
  } else if (gameTime >= 20) { //if the timer reaches 20 seconds
    
    document.getElementById("startButton").innerHTML = "Game Over"; //changes the start button inner letters
    alert("Game over! you scored: " + gameScore); //method alert pop up in browser for final score
    //console.log("Game Over");
   
  }
}

function pointsSystem() { 

  //gets HTML div id person and adds click ability with gains points function 
    document.getElementById("person").addEventListener("click", function gainPoints() { 

    gameScore+=1; //each click increments the score +1
    //console.log(gameScore); 

    //gameScore variable links with inner HTML score div to make it visible on browser
    document.getElementById("scoreNumber").innerHTML = gameScore; 
    
});

  //gets HTML div id person and adds click ability with lose points function 
    document.getElementById("enemy").addEventListener("click", function losePoints(){

    gameScore-=5; //each click decrements the score -5
    //console.log(gameScore);

    //gameScore variable links with inner HTML score div to make it visible on browser
    document.getElementById("scoreNumber").innerHTML = gameScore;
})
}

console.log("test"); //Need to setup nodejs properly


function dissapearingPlayers() { 

  while (gameTime = true) { //loop while the game timer is incrementing.

    document.getElementById("enemy").style.display = "none"; //makes enemy div dissapear
    document.getElementById("enemy").style.display = "inline"; //makes enemy div reappear

    setTimeout(dissapearingPlayers, 1000); //slows down intervals

    //stops while loop
    if(gameTime == 20) //if the timer reaches 20, the loop will stop
    break; //breaks the loop
  }
}
