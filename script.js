let gameTime = 0; //number for time that will increment as the game plays out. 
let gameScore = 0; //number for the player's score that will increment.

function startGame() { //pressing the play button starts the game with nested functions
  gameIntervals(); //games timer function
  pointsSystem(); //gain or lose points function
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
   

    //Idea: Make the divs 0px by 0px to make it look like it dissapears, normal size when it appears. This way you can use numbers in maths.random

    widthArray = ['0', '50'] //Between 0 and 50px  only
    var randomWidth = widthArray[Math.floor(Math.random()*widthArray.length)]; //[Math.floor] is needed to calculate Math.random()*widthArray.length) * <-- combines those two to use array


    displayArray = ["inline", "none"] //choose between strings, inline or none
    var displayRandom = displayArray[Math.floor(Math.random()*displayArray.length)]; //[Math.floor] is needed to calculate Math.random()*widthArray.length) * <-- combines those two to use array


    if (gameTime == 1){
      
      document.querySelector(".enemyClass").style.display= displayRandom; //document.getelementbyClassName doesn't let you use the display CSS command

      //px is added to the end of randomWidth to convert it into a specific number with px for CSS
      //document.getElementById("1").style.width = randomWidth + "px"; //Need to use ID to effect individual squares,

    }

    if (gameTime == 2){
      document.querySelector(".enemyClass").style.display= displayRandom;
      
    }

    if (gameTime == 3){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 4){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 5){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 6){
      document.querySelector(".enemyClass").style.display= displayRandom;
    } 

    if (gameTime == 7){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 8){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 9){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 10){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 11){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 12){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 13){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 14){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 15){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 16){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 17){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 18){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 19){
      document.querySelector(".enemyClass").style.display= displayRandom;
    }

    if (gameTime == 20){
      document.querySelector(".enemyClass").style.display= displayRandom;
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
    document.querySelector(".enemyClass").addEventListener("click", function losePoints(){

    gameScore-=5; //each click decrements the score -5
    //console.log(gameScore);

    //gameScore variable links with inner HTML score div to make it visible on browser
    document.getElementById("scoreNumber").innerHTML = gameScore;
})
}

console.log("test"); //Need to setup nodejs properly
console.log(gameTime) // does nothing