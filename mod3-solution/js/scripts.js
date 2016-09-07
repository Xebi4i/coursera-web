var main = function (){
    $(".navbar-toggle").click(function() {
        $(this).toggleClass("active");
    }); 
};

$(document).ready(main);