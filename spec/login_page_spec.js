describe ("test the username input field on login page", function() {
    it ("to test input field and check text output", function() {
        browser.get("http://localhost/barcelona_conf_16_angular_spec/#/login");
        element(by.model("credentials.username")).sendKeys("admin");
        element(by.model("credentials.password")).sendKeys("pigsInBlankets");
    });
});