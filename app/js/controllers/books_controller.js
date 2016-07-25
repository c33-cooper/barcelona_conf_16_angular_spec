// with $resource
angular.module("app").controller("BooksResourceController", function ($scope, $location, BookResource, AuthenticationService) {
  // because the stubbed endpoint returns an array of results, .query() is used
  // if the endpoint returned an object, you would use .get()
  $scope.books = BookResource.query();

  // create logout success callback
  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  // Redirect to authentication service via a logout success callback
  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };

  // Redirect to home page
  $scope.home = function() {
    $location.path('/home');
  };
});

// with $http
angular.module("app").controller("BooksHttpController", function ($scope, books) {
  $scope.books = books;
});

