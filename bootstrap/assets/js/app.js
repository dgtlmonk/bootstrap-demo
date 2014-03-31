"use strict";

var bootstrapDemo = angular.module('bootstrapDemo',['ngRoute']);
 
var controllers = {};

controllers.baseController = function ($scope) {
  $scope.data = [];  
}


bootstrapDemo.config(function($routeProvider){
    $routeProvider
        .when('/',
              {
                  controller: 'baseController',
                   templateUrl: './partials/home.html'
              })
        
        .when('/product-men',
              {
                  controller: 'baseController',
                  templateUrl: './partials/product-men.html'
                 
              })
        .when('/product-women',
              {
                  controller: 'baseController',
                  templateUrl: './partials/product-women.html'
                 
              });
    
        //.otherwise({ redirectTo: '/'}); */
       // open /Applications/Google\ Chrome.app/ --args --disable-web-security
       
});
 

bootstrapDemo.controller(controllers);
