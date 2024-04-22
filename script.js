let gameTime = 0; //number for time that will increment as the game plays out. 
let gameScore = 0; //number for the player's score that will increment.

function startGame() { //pressing the play button starts the game with nested functions
  gameIntervals(); //games timer function
  pointsSystem(); //gain or lose points function
  dissapearingPlayers(); //dissapearing and reappearing players function 
}

function gameIntervals() { 
  gameTime++; //gametime gets incremented +1 every second
  console.log(gameTime); //checks gameTime is incrementing (JavaScript is a single-threaded language)
  

  if (gameTime <= 20) { //if the game time is less than 20 seconds, below will occur

    //Loops gameIntervals, 750 = time between
    setTimeout(gameIntervals, 750); //method to slow down the game timer.

    //link with HTML timer
    document.getElementById("timeNumber").innerHTML = gameTime; //links the gameTime variable with HTML timer div
    document.getElementById("startButton").innerHTML = "Game Started"; //changes the start button inner letters

    //stops play button press
    document.getElementById("startButton").onclick = false; //so you can only click the play button once to start game
   

    //This is a long solution but it works! (maybe there is a way to effect specifically even numbers and odd numbers?)
    

    // I want to test if I can turn none and inline into numbers and use the numbers in maths.random
    let invisibleE = document.getElementById("enemy").style.display = "none" == 1;
    
    let visibleE = document.getElementById("enemy").style.display = "inline" == 2;

    //-------------------------------------------------------------------

    if (gameTime == 1){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 2){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 3){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 4){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 5){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 6){
      document.getElementById("enemy").style.display = "inline";
    } 

    if (gameTime == 7){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 8){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 9){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 10){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 11){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 12){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 13){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 14){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 15){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 16){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 17){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 18){
      document.getElementById("enemy").style.display = "inline";
    }

    if (gameTime == 19){
      document.getElementById("enemy").style.display = "none";
    }

    if (gameTime == 20){
      document.getElementById("enemy").style.display = "inline";
    }


  //stops setTimeout loop
  } else if (gameTime >= 20) { //if the timer reaches 20 seconds
    
    document.getElementById("startButton").innerHTML = "Game Over"; //changes the start button inner letters
    alert("Game over! you scored: " + gameScore); //method alert pop up in browser for final score
    location.reload();
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
console.log(gameTime) // does nothing

/*
function dissapearingPlayers() { 

  let dissapearingLogGameTime = document.getElementById("timeNumber").innerHTML; //to select the inside of the  variable
  dissapearingLogGameTime++; //increments variable
  console.log(dissapearingLogGameTime); 

  while (dissapearingLogGameTime <= 20){ //To get the code to start once game button changes to "Game Started"

    
    document.getElementById("enemy").style.display = "inline"; //makes enemy div reappear
    document.getElementById("enemy").style.display = "none"; //makes enemy div dissapear
 
  }


  }
}

  /*while (dissapearingLogGameTime != 20) { //loop while the game timer is incrementing.
  console.log("function D test");
  document.getElementById("enemy").style.display = "none"; //makes enemy div dissapear
  document.getElementById("enemy").style.display = "inline"; //makes enemy div reappear

  setTimeout(dissapearingPlayers, 1000); //slows down intervals*/

  //if(document.getElementById("timeNumber").innerHTML == 20) //if the timer reaches 20, the loop will stop
  //break; //breaks the loop */

/*    //stops while loop
if(gameTime == 20) //if the timer reaches 20, the loop will stop
break; //breaks the loop */