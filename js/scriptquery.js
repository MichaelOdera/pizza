$(document).ready(function(){
    /*Alert on successful addition*/
    $(".add-to-cart").one('click', function(){
        alert("Successfully added to cart");
    });

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

    /*display checkout div*/
    $('.checkout').one('click', function(){
        $('#checkout').show();
    });
});