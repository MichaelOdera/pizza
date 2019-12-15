
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
    })
}