describe('Barcelona AngularJS App', function () {

  // Page Object Code
  describe('visiting the home page', function () {
    beforeEach(function () {
      browser.get('/home');
    });

    // Test Logic Code
    when('hovering the mouse over the QA consulting image', function() {
      mouseMove(ptor.findElement(protractor.By.id('home'))).perform();
    });
    it('should display a QA consulting directive banner', function() {
      
    });
  });
});