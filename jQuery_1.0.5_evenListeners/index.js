
// to change css of one tag by jsut click on it
$("h1").click(function (e) { 
    e.preventDefault();
    $("h1").css("color", "purple");
    
});

//to change color of H1 with all buttons in javascript
for( var i= 0; i<5;i++){
   document.querySelectorAll("button")[i].addEventListener("click", function () {
       document.querySelector("h1").style.color="purple";
     });
}

//same thing in jquery

$("button").click(function (e) { 
    e.preventDefault();
    $("h1").css("color","red");
});

// change color of h1 when keypress event
$("input").keypress(function (event) { 
    console.log(event.key);
    $("h1").css("color", "green");
});

// challenge change text of h1 when keypress

$("body").keypress(function (e) { 
    $("h1").text(e.key);
});


// use of on ("click"..."keypress"....)
// to be able to listen t any event 

$("h1").on("mouseover", function () {
    $("h1").css("color", "green");
});