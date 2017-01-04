'use strict';

angular.
  module('todoList').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/itens', {
          template: '<item-list></item-list>'
        }).
        otherwise('/itens');
    }
  ]);