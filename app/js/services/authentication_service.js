angular.module("app").factory('AuthenticationService', function($http) {
  // these routes map to stubbed API endpoints in config/server.js
  return {
    login: function(credentials) {
    	if (credentials.username === "admin" && credentials.password === "pigsInBlankets") {
    		return $http.post('/login', credentials);
    	} else {
    		alert('Login Credentials are Incorrect, Try Again!');
    	}
    },
    logout: function() {
      return $http.post('/logout');
    }
  };
});