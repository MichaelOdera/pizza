$(document).ready(function(){
   $(".add-to-cart").one('click', function(){
       $("#fa-shopping").append("You have items in cart");
   });

   $("#fa-shopping").one('click', function(){
       $(".shop").toggle();
   });

   $(".go-to-cart").one('click', function(){
       $(".container-fluid").hide();
       $(".cart").show();
   });

   $(".back-to-shop").one('click', function(){
       $(".container-fluid").show();
       $(".cart").hide();
   })
});