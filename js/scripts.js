
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

function updateFinalSum(){
    var cartList = document.getElementsByClassName('cart')[0];
    var shopItemsBody = cartList.getElementsByClassName('card-body')[0];
    var shopItems = shopItemsBody.getElementsByClassName('cart-item');
    for(var j=0; j < shopItems.length; j++){
        var shopItem = shopItems[i];
    }

}