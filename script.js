let gameTime = 0;
let gameScore = 0;

function startGame() {
  gameIntervals();
  pointsSystem();
  movePlayers();
}

function gameIntervals() {
  gameTime++;
  if (gameTime <= 20) {

    //Loops gameIntervals, 750 = time between
    setTimeout(gameIntervals, 750); 
    
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
    location.reload();
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

function movePlayers() {


}


/* 
  To select the HTML Divs in CSS, display: none -> display: block;

  To randomise -> Create a section of several enemy/person blocks that disappear and reappear using math.random
  --Children of a section must be parents. Cons - Predictability makes the game easier.
  ---But this is how I can come up with the solution with my current skills.

Use a for loop. 

/*

/*let parentBlock = document.getElementById("Board");
let childBlocks = parentBlock.children;
//console.log(childBlocks);

const childArray = Array.from(childBlocks);
//console.log(childArray);

childArray.sort(() => Math.random() - 0.5);
    document.querySelector("#Board").innerHTML = childArray;
    childArray = parentBlock;
    console.log(childArray);

    This will not work.
*/

/*
    //This is how to select board children
    let divChildren = document.getElementById("Board").children;
    //console.log(divChildren);
    
    //Converting the div variable into an array
    const boardArray = Array.from(divChildren);
    
    //randomize div variable
    boardArray.sort(() => Math.random() - 0.5);
    document.getElementById("Board").childElementCount =  boardArray;
    console.log(boardArray);
*/