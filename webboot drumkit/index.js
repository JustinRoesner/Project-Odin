/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked");
}
*/

// listen for button click
for (var i = 0; i<7; i++){
    // document.querySelectorAll(".drum")[i].addEventListener("click", function (){ alert("hi")});
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){  
        // console.log(this.innerHTML);
        // this.style.color = "white";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// listen for key press
document.addEventListener("keydown", function(event) {
    // alert("Hey was pressed!");
    // console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.volume = 0.1;
                tom1.play()
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.volume = 0.1;
                tom2.play()
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.volume = 0.1;
                tom3.play()
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.volume = 0.1;
                tom4.play()
                break;
            case "j":
                var crash = new Audio('sounds/crash.mp3');
                crash.volume = 0.1;
                crash.play()
                break;
            case "k":
                var bass = new Audio('sounds/kick-bass.mp3');
                bass.volume = 0.1;
                bass.play()
                break;
            case "l":
                var audio = new Audio('sounds/crash.mp3');
                audio.volume = 0.1;
                audio.play()
                break;
            default:
                console.log(buttonInnerHTML);
                break;
        }
}

function buttonAnimation(currentKey){
    //document.querySelector(".w");
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}
