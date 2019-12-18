$(document).ready(function(){
    /*Alert on successful addition*/
    $(".add-to-cart").click(function(){
        alert("Successfully added to cart");
    });

    $("#fa-shopping").one('click', function(){
        $(".shop").toggle();
        $(".cart").show();
       
    });
    
    $(".go-to-cart").click(function(){
        $(".container-fluid").hide();
        $(".cart").show();
    });
    
    $(".back-to-shop").click(function(){
        $(".container-fluid").show();
        $(".cart").toggle();
    });

    /*display checkout div*/
    $('.checkout').bind('click',function(){
        $('#checkout').show();
    });

    /*Create a choice for accepting or rejecting delivery option*/

    $(".yes").one('click', function(){
        $('#new-contact').show();
    });

    $(".no").one('click', function(){
        var totalShow = parseFloat($('.total-price').text());
        alert("Your total expenditure will be "+totalShow);
       
    });

    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        var inputtedName = $("input#name").val();
        var inputtedDestination = $("input#destination").val();


        /*I have implemented a constructor*/
        function Visitor(name, destination){
            this.name = name;
            this.destination = destination;
        }
        if(inputtedDestination != "" && inputtedName != ""){
            var user = new Visitor(inputtedName ,inputtedDestination);
            /*Implemented a prototype*/
            Visitor.prototype.nameShow = function(){
                return "Thank you "+user.name+" for shopping with us your item will be delivered at "+user.destination
            }
            alert(user.nameShow());
            var total = parseFloat($('.total-price').text());
            var finalPrice = total + 200;
            $("#price").text(finalPrice);
        }
        else{
            $("Thank you for your purchase");
        } 

    })

});