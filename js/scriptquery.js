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

    /*Create a choice for accepting or rejecting delivery option*/

    $(".yes").one('click', function(){
        $('#new-contact').show();
    });

    $(".no").one('click', function(){
        var totalShow = parseFloat($('.total-price').text());
        alert(totalShow);
        $("#no-delivery-price").show();
        $("#no-delivery-price").text(totalShow)
    });

    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        var inputtedName = $("input#name").val();
        var inputtedDestination = $("input#destination").val();
        if(inputtedDestination != "" && inputtedName != ""){
            alert("Thank you "+inputtedName+" for shopping with us your item will be delivered at "+inputtedDestination)
            var total = parseFloat($('.total-price').text());
            var finalPrice = total + 200;
            alert(finalPrice);
            $("#price").text(finalPrice);
        }
        else{
            $("Thank you for your purchase");
        } 

    })
});