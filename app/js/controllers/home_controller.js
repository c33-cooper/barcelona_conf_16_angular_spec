angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {
  $scope.title = "Angular.JS";
  $scope.message = "Mouse Over these images to see a directive at work";

  // create logout success callback
  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  // Redirect to authentication service via a logout success callback
  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };

  // Redirect to books page
  $scope.books = function() {
  	$location.path('/$resource/list-of-books');
  };
});