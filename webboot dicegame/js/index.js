var player1roll = Math.random();
var player2roll = Math.random();

player1roll = player1roll * 6 + 1;
player1roll = Math.floor(player1roll);

player2roll = player2roll * 6 + 1;
player2roll = Math.floor(player2roll);

switch (player1roll){
    case 1:
        document.querySelector(".player-1-dice").setAttribute("src", "images/d1.jpg");
        break;
    case 2:
        document.querySelector(".player-1-dice").setAttribute("src", "images/d2.jpg");
        break;
    case 3:
        document.querySelector(".player-1-dice").setAttribute("src", "images/d3.jpg");
        break;
    case 4:
        document.querySelector(".player-1-dice").setAttribute("src", "images/d4.jpg");
        break;
    case 5:
        document.querySelector(".player-1-dice").setAttribute("src", "images/d5.jpg");
        break;
    case 6:
        document.querySelector(".player-1-dice").setAttribute("src", "images/d6.jpg");
        break;
}

switch (player2roll){
    case 1:
        document.querySelector(".player-2-dice").setAttribute("src", "images/d1.jpg");
        break;
    case 2:
        document.querySelector(".player-2-dice").setAttribute("src", "images/d2.jpg");
        break;
    case 3:
        document.querySelector(".player-2-dice").setAttribute("src", "images/d3.jpg");
        break;
    case 4:
        document.querySelector(".player-2-dice").setAttribute("src", "images/d4.jpg");
        break;
    case 5:
        document.querySelector(".player-2-dice").setAttribute("src", "images/d5.jpg");
        break;
    case 6:
        document.querySelector(".player-2-dice").setAttribute("src", "images/d6.jpg");
        break;
}

document.querySelector(".player-1-roll").textContent = player1roll;
document.querySelector(".player-2-roll").textContent = player2roll;

if (player1roll > player2roll){
    //player 1 won
    document.querySelector(".player-1-result").textContent="Winner!";
    document.querySelector(".player-2-result").textContent="";
}else if (player1roll === player2roll){
    //tie
    document.querySelector(".player-1-result").textContent="Tie";
    document.querySelector(".player-2-result").textContent="Tie";
}else{
    //player 2 won
    document.querySelector(".player-1-result").textContent="";
    document.querySelector(".player-2-result").textContent="Winner!";
}
