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

      var add = true;

      cartItems.forEach (function(c){

         if(c.$$hashKey == drink.$$hashKey){

            add = false;
         }

      });
  
      if (add){

         cartItems.push(drink);

      }    
   };

});
