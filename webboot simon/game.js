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

// level
var started = false;
var level = -1;

function nextSequence(){
    userClickedPattern = [];
    started = true;
    level++;
    $("#level-title").text("Level " + level);
    
    randomNumber = Math.floor(Math.random() * 4); //random number 1-4
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    flash(randomChosenColor);
}

function checkAnswer(currentLevel){
    console.log("hi " + currentLevel);

    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("success");

        //if finished sequence
        if (gamePattern.length == userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }

    } else {
        console.log("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key To Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function startOver(){
    gamePattern = [];
    started = false;
    level = -1;
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

function animatePress(element){
    $("." + element).addClass("pressed");
    setTimeout(function() {
        $("." + element).removeClass("pressed");
    }, 100);
}

function userClick(id) {
    userChosenColor = id;
    userClickedPattern.push(id);
    console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length - 1);
}

// event handling
$(".btn").on("click", function(e) {
    console.log(e);
    userClick(this.id);
    playSound(this.id);
    animatePress(this.id);
});

$("body").on("keypress", function(){
    //if key press happend for first time
    if (started == false){ 
        nextSequence();
    }
});

