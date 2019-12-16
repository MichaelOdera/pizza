$(document).ready(function(){
    $("#fa-shopping").one('click', function(){
        $(".shop").toggle();
        $(".cart").show();
       
    });
    
    $(".go-to-cart").one('click', function(){
        $(".container-fluid").hide();
        $(".cart").show();
    });
    
    $(".back-to-shop").one('click', function(){
        $(".container-fluid").show();
        $(".cart").toggle();
    });
});