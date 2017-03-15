//app creation
var app = angular.module("myApp", ["ngRoute"]);

//routing for page content importing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/main.html",
    })
    .when("/cart", {
        templateUrl : "pages/cart.html",
        controller : "cartController"
    })
    .when("/beers", {
        templateUrl : "pages/beers.html",
        controller : "mainController"
    })
    .when("/mixed", {
        templateUrl : "pages/mixed.html",
        controller : "mainController"

    }).when("/popular", {
        templateUrl : "pages/popular.html",
        controller : "mainController"
    });
});


