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

    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        var inputtedName = $("input#name").val();
        var inputtedDestination = $("input#destination").val();
        if(inputtedDestination != "" && inputtedName != ""){
            $("#name").text(inputtedName);
            $("#destination").text(inputtedDestination);
            var total = parseFloat($('.total-price').text());
            var finalPrice = total + 200;
            alert(finalPrice);
            $("#price").text(finalPrice);
        }
        else{
            $("Thank you for your purchase");
        }
        

    });
});