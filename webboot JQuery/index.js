//check if jQuery library if ready first.
//don't need this line if jQuery is just before </body>
/* 
$(document).read(function() {
    //jQery here
});
*/

$("h1").css("color", "red");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "orange");
});

$("h1").before("<button>New before</button>"); //before opening tag
$("h1").after("<button>New after</button>");   //after closing tag
$("h1").prepend("<button>New prepend</button>"); //inside front content
$("h1").append("<button>New append</button>");   //inside after content



$("button").on("click", function(){
    $("h1").slideUp().slideDown().slideToggle();
});

$("h1").hide();
$("h1").show();
$("h1").toggle();

$("h1").fadeOut();
$("h1").fadeIn();
$("h1").fadeToggle(); 

$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();

$("h1").animate({opacity: 0.5}); //second part is number for animation
$("h1").slideUp().slideDown().animate({opacity: 1}); //can chain 