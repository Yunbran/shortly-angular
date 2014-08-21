angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  // $scope.loading = false;
  $scope.addLink = function(link){
    $scope.loading = true;
    Links.addLink(link).then( function(){
      $scope.loading = false;
    });
  };
});
