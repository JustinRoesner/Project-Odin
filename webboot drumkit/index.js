/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked");
}
*/


for (var i = 0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){ alert("hi")});
}