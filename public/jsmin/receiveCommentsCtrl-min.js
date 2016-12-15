(function () {
var app = angular.module("mainMod");

  app.controller("getCommentsCtrl", function ($scope, $route, $routeParams, commentsService) {

    $scope.receiveComments = function(reviews) {

      var bizreviews = {};

      businessid = $routeParams.businessid;
      bizreviews.userinput = reviews;
      bizreviews.businessid = businessid;
      commentsService.setComments(bizreviews);
      $route.reload();
    };
  });
})();
