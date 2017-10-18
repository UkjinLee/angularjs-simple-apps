var app = angular.module('clockApp', []);
app.controller('TimeController', TimeController);

function TimeController($scope) {
  $scope.updateTime = function() {
    $scope.currentTime = (new Date).toTimeString();
  };
  $scope.updateTime();
}
