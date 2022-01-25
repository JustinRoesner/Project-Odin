var player1roll = Math.floor(Math.random() * 6) + 1;
var player2roll = Math.floor(Math.random() * 6) + 1;

var randomImgSrc1 = "images/d" + player1roll + ".jpg";
var randomImgSrc2 = "images/d" + player2roll + ".jpg";

// set image
document.querySelector(".player-1-dice").setAttribute("src", randomImgSrc1);
document.querySelector(".player-2-dice").setAttribute("src", randomImgSrc2);

// set roll number
document.querySelector(".player-1-roll").textContent = player1roll;
document.querySelector(".player-2-roll").textContent = player2roll;

// find win condition
if (player1roll > player2roll){
    //player 1 won
    document.querySelector(".player-1-result").textContent="Winner!";
    document.querySelector(".player-2-result").textContent="";
}else if (player1roll === player2roll){
    //tie
    document.querySelector(".player-tie").textContent="Tie!";
    document.querySelector(".player-1-result").textContent="";
    document.querySelector(".player-2-result").textContent="";
}else{
    //player 2 won
    document.querySelector(".player-1-result").textContent="";
    document.querySelector(".player-2-result").textContent="Winner!";
}
