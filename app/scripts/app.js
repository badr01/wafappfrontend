'use strict';

angular.module('mgcrea.WafApp', ['ngAnimate', 'ngRoute', 'frapontillo.bootstrap-switch','mgcrea.ngStrap'])

  .constant('version', 'v0.1.0')

  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/etat', {
        templateUrl: '../views/etat.html'
      })
      .when('/manage', {
        templateUrl: '../views/manage.html'
      })
      .when('/whitelists', {
        templateUrl: '../views/whitelists.html'
      })
      .when('/journalisation', {
        templateUrl: '../views/journalisation.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

