
/*Obtain all the delete buttons in the cart*/
var deleteCartItemButtons = document.getElementsByClassName("btn-danger");
console.log(deleteCartItemButtons);
for(var i = 0; i < deleteCartItemButtons.length; i++){
    var button = deleteCartItemButtons[i];
    /*Listen for click then remove*/
    button.addEventListener('click', function(event){
        console.log("clicked");
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateFinalSum();
    })
}

/*The section that deals with the updating of the sum after the deletion of an item*/
function updateFinalSum(){
    var cartList = document.getElementsByClassName('cart')[0];
    var cartItems = cartList.getElementsByClassName('cart-item');
    for(var j=0; j <cartItems.length; j++){
        var cartItem = cartItems[j];
        var pizzaPrice = cartItem.getElementsByClassName('price')[0];
        var pizzaQuantity = cartItem.getElementsByClassName('quantity')[0];
        console.log(pizzaPrice, pizzaQuantity);
        /*The replacement of the kshs with empty space*/
        var price = parseFloat(pizzaPrice.innerText.replace('Kshs', ''));
        console.log(price);
    }
}