var player1roll = Math.random();
var player2roll = Math.random();

player1roll = player1roll * 6 + 1;
player1roll = Math.floor(player1roll);

player2roll = player2roll * 6 + 1;
player2roll = Math.floor(player2roll);

document.querySelector(".player-1-roll").textContent = player1roll;
document.querySelector(".player-2-roll").textContent = player2roll;