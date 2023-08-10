// JS Document Creator - Tom Sargent
// Last Edited Date - 17/04/2023
// Work adapted from Michael Borck in Curtin Universities ISYS3004 - Business Web and Mobile Technologies. Semester 1 2023.
// Description: Javascript for a buzzword generator.
  
// Use `getElementById`  to find the HTML element with  ID and assigns it to the variable.
var square = document.getElementById('square');
var words = document.getElementById('words');

// Define function greeting that sets the html of words to the given text
function greeting() {
    words.innerHTML = "Welcome to Flatland <br> I am Square!"
}
// define function to change colour of the square
function changeColour(colour) {
    square.style.background = colour;
}
// define function to build a "createBuzzwordPharase" on click
function clicked() {
    var msg = "build a<br>" + createBuzzwordPhrase();
    words.innerHTML = msg;    
}
// Add event listeners when an event occurs such as click or hover
square.addEventListener('click', (event) => clicked());
square.addEventListener('click', (event) => changeColour('green'));
square.addEventListener('mouseover', (event) => changeColour('grey'));
square.addEventListener('mouseout', (event) => changeColour('red'));

// Run function greeting on document load
document.onload = greeting()

// Define the function to select random one of each buzz, action and outcome and combine
function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}
// Log the result to the console
console.log(createBuzzwordPhrase())