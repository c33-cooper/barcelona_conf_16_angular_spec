describe('Barcelona AngularJS App', function () {

  // *** Page Object Code ***
  describe('visiting the login page', function () {
    beforeEach(function () {
      browser.get('/login');
      browser.waitForAngular();
    });

    // *** Test Logic Code ***
    describe('when a user enters a correct username and password', function() {
      it('should redirect the user to the home page', function() {
        // Enter incorrect data into username field but correct into password
        element(By.model("credentials.username")).sendKeys("admin");
        element(By.model("credentials.password")).sendKeys("pigsInBlankets");
        element(By.id("log-in")).click()

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/home');
      });
    }); 
  });
});

