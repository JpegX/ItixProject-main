angular.module('backend', []).controller('controllerFront', function ($scope, $http) {
  $http.get('/api/users').then(function (response) {
    $scope.greeting = response.data;
  });
});
