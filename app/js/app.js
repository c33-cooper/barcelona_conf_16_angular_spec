// setter
var app = angular.module("app", ['ngRoute']).config(function($routeProvider) {

    // Login Route
    $routeProvider.when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginController'
    });

    // Home Route
    $routeProvider.when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    });

    // Always redirect to login route if any
    // other route is trying to be accessed.
    $routeProvider.otherwise({ redirectTo : '/login' });
});

// Service is primarily focusing around authentication. The
// service can be injected as as a dependency into controllers
// in the same say as $scope & &location.
app.factory("AuthenticationService", function($location) {
    return {
        // Login function runs a check on the users credentials
        // and re-directs them to the home page upon successful
        // authentication.
        login: function(credentials) {
            if (credentials.username == "admin" && credentials.password == "pigsInBlankets") {
                $location.path('/home');
            } else {
                    alert('Login Credentials are Incorrect, Try Again!');
            }
        },
        // Logout function is triggered when the user clicks
        // on the logout button. This is bound to a ng-click
        // directive.
        logout: function() {
            $location.path('/login')
        }
    };
});

// Login Controller
app.controller('LoginController', function($scope, AuthenticationService) {
    // Define login credentials attributes within
    // the controller scope.
    $scope.credentials = { username: "", password: "" };

    // Call AuthenticationService login function.
    $scope.login = function() {
        AuthenticationService.login($scope.credentials);
    };
});

// Home controller
app.controller('HomeController', function($scope, AuthenticationService) {
    // We can dynamically inject the title string
    // into our home page view with two way data binding.
    $scope.title = "Angular.JS Home Page";

    // Dynamically inject welcome message to user when
    // they are directed to the home page.
    $scope.message = "Mouse over these images to see a directive at work.";

    // Call AuthenticationService logout function
    $scope.logout = function() {
        AuthenticationService.logout();
    };
});

// Our added directives for image hovering functionality.
app.directive('showsMessageWhenHovered', function() {
    return {
        restrict: "A", // A = Attribute, C = Class Name, E = Element, M = HTML Comment
        link: function(scope, element, attributes) {
            // Store original message which is pulled in from scope
            // in parentheses. This value is coming from the
            // HomeController ^^^^^ above as the 'showsMessageWhenHovered'
            // directive is used within the home.html view, and therefore
            // still within the bounds of the HomeController view.
            var originalMessage = scope.message;

            // Bind the element to a new message when the mouse
            // hovers over the image and apply().
            element.bind("mouseover", function() {
                scope.message = attributes.message;
                scope.$apply();
            });
            // When the mouse hovers out of the image we
            // will bind the element back to the previous
            // message.
            element.bind("mouseout", function() {
                scope.message = originalMessage;
                scope.$apply();
            });
        }
    };
});
