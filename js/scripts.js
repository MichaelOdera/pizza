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

    /*Add to cart buttons*/
    var addToShopListButtons = document.getElementsByClassName('add-to-cart');
    for(var l = 0; l < addToShopListButtons.length; l++){
        var addToShopListButton = addToShopListButtons[l];
        addToShopListButton.addEventListener('click', addToShop);
    }
}
/*function to add an item to the cart shopping list*/
function addToShop(event){
    var addButton = event.target;
    var cartItem = addButton.parentElement;
    var pizzaName = cartItem.getElementsByClassName('card-title')[0].innerText;
    var pizzaItemPrice = cartItem.getElementsByClassName('price')[0].innerText;
    /*Test the accessibility of the pizza name*/
    console.log(pizzaName, pizzaItemPrice);
    addPizzaToCart(pizzaName, pizzaItemPrice);
    updateFinalSum();

}

function addPizzaToCart(pizzaName, pizzaItemPrice){
    var newCartItem = document.createElement('div');
    newCartItem.classList.add('cart-item');
    var cartItems = document.getElementsByClassName('cart-list')[0];
    // /*Checking if the user has added the same item twice*/
    // var cartItemsNames = document.getElementsByClassName('card-title');
    // for(var m = 0; m < cartItemsNames.length; m ++){
    //     if(cartItemsNames[m].innerText = pizzaName){
    //         alert("You have already entered that order");
    //         return
    //     }
    // }
    var cartItemContents = `
            <div>
                <h4 class="card-title text-center">${pizzaName}</h4>&nbsp;
                <h4>Quantity:</h4>&nbsp;
                <input type="number" class="quantity" value="2">
                <p class="price">${pizzaItemPrice}</p>
            </div>
            <button class="btn-danger">DELETE</button>&nbsp;<button class="back-to-shop btn-success">Continue
            Shopping</button>
            <hr class="item-hr">`
    newCartItem.innerHTML = cartItemContents;
    cartItems.append(newCartItem);
    /*Adding event listeners to the newly added items to the cart*/
    /*Listening for the click of button delete*/
    newCartItem.getElementsByClassName('btn-danger')[0].addEventListener('click', deleteCartItem);
    /*Listening for the change of the input number*/
    newCartItem.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged);
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


/*Creating functions to show prices on change of pizza size selection*/
function showPrice1(){
    var price1 = document.getElementById("selection1").value;
    document.getElementById("one").innerHTML = "Kshs "+ price1;
}

function showPrice2(){
    var price2 = document.getElementById("selection2").value;
    document.getElementById("two").innerHTML = "Kshs "+ price2;
}

function showPrice3(){
    var price3 = document.getElementById("selection3").value;
    document.getElementById("three").innerHTML = "Kshs "+ price3;
}

function showPrice4(){
    var price4 = document.getElementById("selection4").value;
    document.getElementById("four").innerHTML = "Kshs "+ price4;
}

function showPrice5(){
    var price5 = document.getElementById("selection5").value;
    document.getElementById("five").innerHTML = "Kshs "+ price5;
}

function showPrice6(){
    var price6 = document.getElementById("selection6").value;
    document.getElementById("six").innerHTML = "Kshs "+ price6;
}

function showPrice7(){
    var price7 = document.getElementById("selection7").value;
    document.getElementById("seven").innerHTML = "Kshs "+ price7;
}

function showPrice8(){
    var price8 = document.getElementById("selection8").value;
    document.getElementById("eight").innerHTML = "Kshs "+ price8;
}

function showPrice9(){
    var price9 = document.getElementById("selection9").value;
    document.getElementById("nine").innerHTML = "Kshs "+ price9;
}

function showPrice10(){
    var price10 = document.getElementById("selection10").value;
    document.getElementById("ten").innerHTML = "Kshs "+ price10;
}

