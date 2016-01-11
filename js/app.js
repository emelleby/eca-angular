'use strict';

var app = angular.module("ecaApp", ['ngRoute', 'ui.filters', 'checklist-model', 'ngMaterial', 'ngMessages']);

/*
	// Confiuring the routes for the page. Catch all with otherwise which must be among the .whens
	.config(function($routeProvider) {
		
        $routeProvider
            // route for the contactus page
            .when('/instructions', {
                templateUrl : 'pages/instructions.html',
                controller  : 'MainController'
            })
            // route for the menu page
            .when('/catalog', {
                templateUrl : 'pages/ecaPanel3.html',
                controller  : 'MainController'
            })
   
            .otherwise('/instructions');
    })

;






app.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/calendar', {
        templateUrl: 'directives/calendar.html',
        controller: 'calController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});
*/
