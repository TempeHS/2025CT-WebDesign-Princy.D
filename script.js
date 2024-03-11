let enterName = prompt("Enter your name");

let playerFeedback = "test";

loadDIV();



function loadDIV () {
    document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "</H1>";
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2>Guess a number between 1 and 10</H2>";
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback;
}
