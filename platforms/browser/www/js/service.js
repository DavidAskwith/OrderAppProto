//a service used so that the cart itens
//can be stored across the app
app.service("cartService", function() {

   //an array that holds the cart items
   var  cartItems = [];

   //flag used to stop adding itmes with same id to cart
   //stops crash of cart further implimentation would be needed
   //to stop adding of the same items when page is changed
   //maybe a project for later if this continues
   var canAdd = true; 

   //returns the array
   this.getCart = function () {

      return cartItems;
   };

   //push a the passed in drink to the array
   this.addToCart = function (drink){
  
      if (canAdd){

         cartItems.push(drink);

         canAdd = false;
      }    
   };

});
