//controller used for back button
app.controller("myCtrl", ["$scope", function($scope) {

    //an array of object that holds the drinks
    $scope.drinks = [
        {
            name:"Budweiser",
            price:3.75,
            description:"Known as 'The King of Beers,' Budweiser was first introduced by Adolphus Busch in 1876 and it's still brewed with the same high standards today. Budweiser is a medium-bodied, flavorful, crisp American-style lager. Brewed with the best barley malt and a blend of premium hop varieties, it is an icon of core American values like optimism and celebration.",
            category:"beer",
            popular:true
        },
        {
            name:"Gin & Tonic",
            price:6.00,
            description:"A gin and tonic is a highball cocktail made with gin and tonic water poured over ice. It is usually garnished with a slice or wedge of lime. The drink is a particular phenomenon as its taste is quite different from the taste of its constituent liquids which are rather bitter. The chemical structures of both ingredients are of a similar molecular shape and attract each other, shielding the bitter taste.",
            category:"mixed",
            popular:false
        }
   ];

   //holds the drinks for the cart
   $scope.cart=[];

}]);

