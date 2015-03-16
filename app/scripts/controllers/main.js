'use strict';

var myApp = angular.module('mgcrea.WafApp');

  myApp.controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  })
myApp.controller('EtatCtrl', function ($scope, $http) {
  $scope.isSelected = 'Allume';
  $scope.onText = 'ON';

  $scope.offText = 'OFF';
  $scope.isActive = true;
  $scope.size = 'normal';
  $scope.animate = true;
  $scope.radioOff = true;
  $scope.handleWidth = "auto";
  $scope.labelWidth = "auto";
  $scope.inverse = true;

  $scope.$watch('isSelected', function() {

  });

  $scope.toggle = function() {
    $scope.isSelected = $scope.isSelected === 'Allume' ? 'Eteint' : 'Allume';
    var dataObj = {
      page:"EtatWaf",
      action:"Save",
      etat: $scope.isSelected
    };
    var res = $http.post('http://localhost:8080/ProjectWAF/Conn', dataObj);
    res.success(function(data, status, headers, config) {
      $scope.message = data;
    });
    res.error(function(data, status, headers, config) {
      alert( "failure message: " + JSON.stringify({data: data}));
    });
  };

  $scope.toggleActivation = function() {
    $scope.isActive = !$scope.isActive;
  }
});
