/*
describe('Barcelona AngularJS App', function () {

  // *** Page Object Code ***
  describe('visiting the login page', function () {
    beforeEach(function () {
      browser.get('/login');
      browser.waitForAngular();
    });

    // *** Test Logic Code ***
    describe('when a user enters an incorrect username but a correct password', function() {
      it('should display an incorrect error alert popup', function() {
        // Enter incorrect data into username field but correct into password
        element(By.model("credentials.username")).sendKeys "admin"
        element(By.model("credentials.password")).sendKeys "pigsInBlankets"
        element(By.id("log-in")).click()

        expect(element(By.binding("message")).getText()).toEqual("Mouse Over these images to see a directive at work")

        // Log the alertDialog popup into attribute and assert the text keys.
        //browser.navigate().refresh();
        //browser.sleep(100);
        //var alertDialog = browser.switchTo().alert();
      });
    }); 
  });
});
*/

