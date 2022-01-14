

// on peut utiliser conloge log pour voir la valuer du css pour h1
console.log ($("h1").css("color"));
console.log ($("h1").css("font-size"));

//selectionne le h1 et change la couleur en vert
// mais ce n'est pas correct de changer le css directement dans js
//$("h1").css("color","green");

// il vaut mieux déclarer dans le css une classe avec le style 
// et l'utiliser dans le fichier js pour modifer le style
// on peut ajouter autant de classe que possible en les séparant par des espaces!
$("h1").addClass("bigTitle margin_50")
console.log ($("h1").css("color"));
console.log ($("h1").css("font-size"));
console.log ($("h1").css("font-family"));

//to remove a class css for a selected element
$("h1").removeClass("margin_50");

// to visualize if a element have a class css 
var hasClass = $("h1").hasClass("margin_50");
console.log(hasClass);