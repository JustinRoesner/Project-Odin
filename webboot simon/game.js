// colors and pattern
buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];

userClickedPattern = [];

// audio
var audioBlue   = new Audio('sounds/blue.mp3');
var audioGreen  = new Audio('sounds/green.mp3');
var audioRed    = new Audio('sounds/red.mp3');
var audioYellow = new Audio('sounds/yellow.mp3');

audioBlue.volume   = 0.2;
audioGreen.volume  = 0.2;
audioRed.volume    = 0.2;
audioYellow.volume = 0.2;

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4); //random number 1-4
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(element){
    switch (element) {
        case "blue":
            audioBlue.play();
            break;
        case "green":
            audioGreen.play();
            break;   
        case "red":
            audioRed.play();
            break;
        case "yellow":
            audioYellow.play();
            break;
        default:
            console.log("sound error" + element);
            break;
    }
}

function flash(element){
    $("." + element).fadeOut(100).fadeIn(100);
    playSound(element);
}

function userClick(id) {
    userChosenColor = id;
    userClickedPattern.push(id);
    console.log(userClickedPattern);
}

// event handling
$(".btn").on("click", function(e) {
    console.log(e);
    userClick(this.id);
    playSound(this.id);
});

$("body").on("keypress", function(){
    nextSequence();
});

