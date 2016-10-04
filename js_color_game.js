
var colors=["red", "orange", "blue", "yellow", "purple"];
var guess_input_text;   
var guess_input;      
var finished = false;
var guesses = 0;
var target ;
function do_game() {
    var random_number = Math.random() * 5;
    var target_index = Math.floor(random_number);
    target = colors[target_index];
   // alert(target);
    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors:\n"+ "blue, purple, orange, red\n"+
                                  "What color am I thinking of?");   
        guess_input = guess_input_text;
        guesses += 1;   
        finished = check_guess();
    }
        
         document.body.style.background = target;
}

function check_guess() {
    if (colors.indexOf(guess_input) == -1) {
        alert("I don't recognize.");
        return false;
    }
    if (guess_input > target) {
        alert("Your color is higher!");
        return false;
    }
    if (guess_input < target) {
        alert("Your color is lower!");
        return false;
    }
    alert("Congratulations!");
    return true;   
}