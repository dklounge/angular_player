var app = angular.module('myApp', []);

app.run(function ($rootScope) {
  $rootScope.name = "this is in the rootScope";
});

app.controller('PlayerController', ['$scope', function ($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src ='http://download.wavetlan.com/SVV/Media/HTTP/sample_300kbit.mp4'
  $scope.play = function () {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function () {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function () {
    $scope.$apply(function () {
      $scope.stop()
    });
  });
}]);

app.controller('MyController', function ($scope) {
  $scope.person = {name: "david"}
  var updateClock = function () {
    $scope.clock = new Date();
  };
  var tickTock = setInterval(function () {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});
