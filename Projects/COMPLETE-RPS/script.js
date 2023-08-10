// JS Document Creator - Tom Sargent
// Last Edited Date - 17/04/2023
// Work adapted from Michael Borck in Curtin Universities ISYS3004 - Business Web and Mobile Technologies. Semester 1 2023.
// Description: Javascript for a RSS feeder web application.
    
    /* Michael/I found this code at https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h */
    function say(myMessage){
        var msg = new SpeechSynthesisUtterance(myMessage);
        window.speechSynthesis.speak(msg)
        }
        /* This is a simplified version of the game.
        The Computer ALWAYS picks ROCK.  
        Does the user's choose win,lose, or tie vs ROCK? */
        // Define the function play
        function play(user) {
        let result = "";
        // set a series of if statements depending on what the user selects
        if (user === 'rock') {
            result = "tie";
        }
        if (user === 'paper') {
            result = "win";
        }
        if (user === 'scissors') {
            result = "lose";
        }
        // Construct the message for the result
        var theMessage = "Computer chose rock, you " + result + "!"
       // alert and inform the user of the result
        alert(theMessage);
        say(theMessage);
        }