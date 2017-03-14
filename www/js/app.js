//app creation
var app = angular.module("myApp", ["ngRoute"]);

//routing for page content importing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/main.html",
        controller : "myCtrl"
    })
    .when("/cart", {
        templateUrl : "pages/cart.html",
        controller : "myCtrl"
    })
    .when("/beers", {
        templateUrl : "pages/beers.html",
        controller : "myCtrl"
    })
    .when("/mixed", {
        templateUrl : "pages/mixed.html",
        controller : "myCtrl"

    }).when("/popular", {
        templateUrl : "pages/popular.html",
        controller : "myCtrl"

    });
});


