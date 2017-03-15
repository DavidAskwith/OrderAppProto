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
            image:"img/beer.png",
            number:0
        },
        {
            name:"Gin & Tonic",
            price:6.00,
            description:"A gin and tonic is a highball cocktail made with gin and tonic water poured over ice. It is usually garnished with a slice or wedge of lime. The drink is a particular phenomenon as its taste is quite different from the taste of its constituent liquids which are rather bitter. The chemical structures of both ingredients are of a similar molecular shape and attract each other, shielding the bitter taste.",
            category:"mixed",
            popular:false,
            image:"img/mixed.png",
            number:0
        },
        {
            name:"Amaretto Sour",
            price:9.20,
            description:"The flavor of amaretto dominates this drink, so the Amaretto Sour clashes with some recipes. You can definitely enjoy this drink all by itself. Or you can serve it with salty bar snacks, or mildly sweet desserts like tiramisu, cheesecake or a chocolate croissant.",
            category:"mixed",
            popular:true,
            number:0,
            image:"img/mixed.png"
        },
        {
            name:"Martini",
            price:9.00,
            description:"Gin and dry vermouth, and perhaps a dash of orange bitters. Stirred and served up, with an olive or a twist. A classic — with differing storied accounts as to its origin.",
            category:"mixed",
            popular:false,
            number:0,
            image:"img/mixed.png"
        },
        {
            name:"Margarita",
            price:9.00,
            description:"Tequila Reposado, Cointreau, and lime juice. Shaken and served on the rocks, with a salted rim and a lime wedge. Countless origins of this Mexican classic.",
            category:"mixed",
            popular:false,
            number:0,
            image:"img/mixed.png"
        },
        {
            name:"Bloody Mary",
            price:9.00,
            description:"Vodka, tomato juice, Worcestershire sauce, Tabasco, salt, pepper, lemon juice, lime wedge, horseradish, celery salt. Built in a highball glass with ice, garnished with an olive and a celery stick. First mixed by American bartender Fernand 'Pete' Petiot at Harry's New. York Bar in Paris during the 1920s.  A patron there said it reminded him of a girl named Mary he knew at the Bucket of Blood Club in Chicago.  An eye opener.",
            category:"mixed",
            popular:true,
            number:0,
            image:"img/mixed.png"
        },
        {
            name:"Pabst Blue Ribbon",
            price:9.00,
            description:"Pabst Blue Ribbon is an American lager beer sold by Pabst Brewing Company, established in Milwaukee, Wisconsin in 1844 and currently based in Los Angeles. Originally called Best Select, and then Pabst Select, the current name comes from the blue ribbons tied around the bottle neck between 1882 and 1916.",
            category:"beer",
            popular:true,
            number:0,
            image:"img/beer.png"
        },
        {
            name:"Heineken",
            price:9.00,
            description:"The archetypal lager. Heineken is a super-inoffensive lager with a stronger, bitterer taste than most internationally mass-produced lagers. It’s perfectly carbonated, pours a straw yellow colour, with little or no head to speak of. It goes down smoothly when it’s ice cold.",
            category:"beer",
            popular:true,
            number:0,
            image:"img/beer.png"
        },
        {
            name:"Bud Light",
            price:9.00,
            description:"Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the world's favorite light beer.",
            category:"beer",
            popular:false,
            number:0,
            image:"img/beer.png"
        },
        {
            name:"Coors Light",
            price:9.00,
            description:"Every brew of Coors Light is made with traditional two-row lager malt which is made from our unique high country barley and four hop varieties. These are selected for their delicate aromatic properties. Coors has been using the same type of high country barley for decades, for a history you can taste.",
            category:"beer",
            popular:false,
            number:0,
            image:"img/beer.png"
        }
    ];

});


app.controller("cartController", function($scope, cartService) {

    //sets the cart items array to the services array of cart items
    $scope.cartItems = cartService.getCart();

    console.log($scope.cartItems);
});
