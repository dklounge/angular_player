var app = angular.module('myApp', []);

app.run(function ($rootScope) {
  $rootScope.name = "this is in the rootScope";
});

app.controller('ParentController', function ($scope) {
  $scope.person = { greeted: false };
});

app.controller('ChildController', function ($scope) {
  $scope.sayHello = function () {
    $scope.person.greeted = true;
  }
  $scope.reset = function () {
    $scope.person.greeted = false;
  }
});
