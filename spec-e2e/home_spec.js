describe('Barcelona AngularJS App', function () {

  // *** Page Object Code ***
  describe('visiting the home page', function () {
    beforeEach(function () {
      browser.get('/home');
      browser.waitForAngular();
    });

    // *** Test Logic Code ***
    // Mouse hover over QA consulting directive banner test
    describe('when hovering the mouse over the QA consulting image', function() {
      it('should display an QA consulting directive banner', function() {
        browser.actions().mouseMove(element(protractor.By.id('qa-img'))).perform();
        expect(element(By.binding("message")).getText()).toEqual("QA Consulting")
      });
    });

    // Mouse hover over AngularJS directive banner test
    describe('when hovering the mouse over the AngularJS image', function() {
      it('should display an AngularJS directive banner', function() {
        browser.actions().mouseMove(element(protractor.By.id('angular-img'))).perform();
        expect(element(By.binding("message")).getText()).toEqual("AngularJS")
      });
    });

    // List of books button test
    describe('when clicking the List of Books button', function() {
      it('should redirect the user to the list of books page', function() {
        element(By.id("list-of-books-button")).click()
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/$resource/list-of-books');
      });
    });

    // Logout button test
    describe('when clicking the Logout button', function() {
      it('should redirect the user to the login page', function() {
        element(By.id("logout-button")).click()
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/login');
      });
    });
  });
});