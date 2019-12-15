/*Checking if the document is loaded and then load concurrently*/
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}


/*Function ready to run the main button functions on load*/
function ready(){
    var deleteCartItemButtons = document.getElementsByClassName("btn-danger");
    console.log(deleteCartItemButtons);
    for(var i = 0; i < deleteCartItemButtons.length; i++){
        var button = deleteCartItemButtons[i];
        /*Listen for click then remove*/
        button.addEventListener('click', deleteCartItem)
    }
    var quantitySelections = document.getElementsByClassName('quantity');
    for(var k = 0; k < quantitySelections.length; k++){
        var quantitySelection = quantitySelections[k];
        quantitySelection.addEventListener('change', quantityChanged);
    }
}


/*Update the sum total on change of the quantity*/
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateFinalSum()

}

/*Function to delete a cart item*/
function deleteCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateFinalSum();
}       
/*Obtain all the delete buttons in the cart*/


/*The section that deals with the updating of the sum after the deletion of an item*/
function updateFinalSum(){
    var cartList = document.getElementsByClassName('cart')[0];
    var cartItems = cartList.getElementsByClassName('cart-item');
    var sumTotal = 0;
    for(var j=0; j <cartItems.length; j++){
        var cartItem = cartItems[j];
        var pizzaPrice = cartItem.getElementsByClassName('price')[0];
        var pizzaQuantity = cartItem.getElementsByClassName('quantity')[0];
        console.log(pizzaPrice, pizzaQuantity);
        /*The replacement of the kshs with empty space*/
        var price = parseFloat(pizzaPrice.innerText.replace('Kshs', ''));
        console.log(price);
        var quantity = pizzaQuantity.value;
        sumTotal = sumTotal + (quantity * price);
    }
    document.getElementsByClassName('total-price')[0].innerText = sumTotal;
}