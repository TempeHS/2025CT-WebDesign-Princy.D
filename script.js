let enterName = prompt("Enter your name");
let playerGuess; 
let computerGuess = randomNum();
let playerFeedback = computerGuess;
loadDIV()

function randomNum() {
    return Math.floor(Math.random() * (10 - 1 + 1 ) + 1)
}

loadDIV();


function loadDIV () {
    document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "</H1>";
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2>Guess a number between 1 and 10</H2>";
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback;
}

function enternumber () {
    playerGuess = prompt ("Enter a number")
}