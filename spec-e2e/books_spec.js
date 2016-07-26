describe('Barcelona AngularJS App', function () {

  var bookRows;

  // Page object Code
  describe('visiting the books page', function () {
    beforeEach(function () {
      // Get the list of books web page
      browser.get('/$resource/list-of-books');
      // Wait for angular to finish all computations
      browser.waitForAngular();
      bookRows = element.all(by.repeater('book in books'));
    });

    // Test logic Code
    it('should show me a list of books', function() {
      expect(bookRows.count()).toEqual(3);
      expect(bookRows.get(0).getText()).toEqual('Great Expectations by Dickens');
      expect(bookRows.get(1).getText()).toEqual('Foundation Series by Asimov');
      expect(bookRows.get(2).getText()).toEqual('Treasure Island by Stephenson');
    });

    // homepage-button button test
    describe('when clicking the Homepage button', function() {
      it('should redirect the user to the Homepage', function() {
        element(By.id("homepage-button")).click()
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/home');
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