// to hide a element

$("h1").on("click", function () {
    $("h1").hide();
});

// to show it again
$("h1").show();

//to hide et show again when clik on button
$("#button1").on("click", function () {
    $("h1").toggle();
});

// to hide a show with a fade
$("button").on("keypress", function () {
    $("h1").fadeToggle();
});

// to slide 
$("#button2").on("click", function () {
    $("h1").slideToggle();
});

// to make animation on css with ONLY numeric values!!!!

$("#button3").on("click", function () {
    $("h1").animate({opacity:0.5, margin:"20%"});
});

//pour enchainer des effets

$("#button4").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
// pour faire un slide a gauche
$("#button5").on("click", function () {
    $("h1").animate({width:"toggle"},500);
});
