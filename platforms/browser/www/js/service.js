//a service used so that the cart itens
//can be stored across the app
app.service("cartService", function() {

   //an array that holds the cart items
   var  cartItems = [];

   //returns the array
   this.getCart = function () {

      return cartItems;
   };

   //push a the passed in drink to the array
   this.addToCart = function (drink){

      var canAdd = true;

      //runs through each item in the cart
      cartItems.forEach (function(c){

         //comapres the hash key of new item to avoid
         //duplicate object
         if(c.$$hashKey == drink.$$hashKey){

            canAdd = false;

         //if the names are the same increments 
         //quantity and stops adding to cart
         }else if(c.name == drink.name){

            c.number += drink.number;

            canAdd = false;
         }

      });
  
      if (canAdd){

         cartItems.push(drink);

      }    
   };

});
