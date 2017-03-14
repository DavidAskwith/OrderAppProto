//app creation
var app = angular.module("myApp", ["ngRoute"]);

//routing for page content importing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/main.html"
    })
    .when("/cart", {
        templateUrl : "pages/cart.html"
    })
    .when("/beers", {
        templateUrl : "pages/beers.html"
    })
    .when("/mixed", {
        templateUrl : "pages/mixed.html"

    }).when("/popular", {
        templateUrl : "pages/popular.html"

    });
});


