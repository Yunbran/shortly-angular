angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = Links.getLinks;
  Links.getLinks().then(function(respData){
    $scope.data.links = respData;
  });
});
