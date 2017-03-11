//the main javascript page

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

//controller used for back button
app.controller('myCtrl', ['$scope', function($scope) {

  
}]);

//directive for a back button
app.directive("backButton", ["$window", function ($window) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            elem.bind("click", function () {
                $window.history.back();
            });
        }
    };
}]);
