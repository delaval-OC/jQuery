//si le cdn jquery est placé à la fin du body et avant le script js alors pas besoin d'utiliser le $(document).ready pour attendre que jquery soit opérationnel

$(document).ready(function () {
    $("h1").css("color","red");
});
