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
document.getElementById("enemy").style.display = "none";
document.getElementById("enemy").style.display = "inline";
*/

/* 
  1. To select the HTML Divs in CSS, display: none -> display: block; (Figure out how to do this with javascript)

  2. To randomise -> Create a section of several enemy/person block sections that disappear and reappear 
     using math.random method to randomise the apperances. This works because Board div flex is aligned to a row.

     -> Children of a section must be parents. Cons - Predictability makes the game easier.
  
     -> this is how I can come up with the solution with my current skills.

     -> Use a for loop to combine everything into one block.

     -> Although its different from the previous security game. I want to come up with my own methods.

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

    This will not work, it converts the DIV elements into text.
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