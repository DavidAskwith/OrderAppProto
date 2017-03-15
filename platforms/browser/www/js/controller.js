//controller used for back button
app.controller("mainController", function($scope, cartService) {

    //makes the cart service availab;e to scope
    $scope.cartService = cartService;

    $scope.clickAble = true;

    //an array of object that holds the drinks
    $scope.drinks = [
        {
            name:"Budweiser",
            price:3.75,
            description:"Known as 'The King of Beers,' Budweiser was first introduced by Adolphus Busch in 1876 and it's still brewed with the same high standards today. Budweiser is a medium-bodied, flavorful, crisp American-style lager. Brewed with the best barley malt and a blend of premium hop varieties, it is an icon of core American values like optimism and celebration.",
            category:"beer",
            popular:true,
            number:0
        },
        {
            name:"Gin & Tonic",
            price:6.00,
            description:"A gin and tonic is a highball cocktail made with gin and tonic water poured over ice. It is usually garnished with a slice or wedge of lime. The drink is a particular phenomenon as its taste is quite different from the taste of its constituent liquids which are rather bitter. The chemical structures of both ingredients are of a similar molecular shape and attract each other, shielding the bitter taste.",
            category:"mixed",
            popular:false,
            number:0
        }
    ];

});


app.controller("cartController", function($scope, cartService) {

    //sets the cart items array to the services array of cart items
    $scope.cartItems = cartService.getCart();

    console.log($scope.cartItems);
});
