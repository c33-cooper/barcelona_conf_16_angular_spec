###
require 'jasmine-given'

describe "Barcelona AngularJS App", ->
  describe "visiting the login page", ->
    Given -> browser.get "/login"

    describe "when a user logs in", ->
      Given -> element(By.model("credentials.username")).sendKeys "admin"
      Given -> element(By.model("credentials.password")).sendKeys "pigsInBlankets"
      When  -> element(By.id("log-in")).click()
      Then  -> expect(element(By.binding("message")).getText()).toEqual("Mouse Over these images to see a directive at work")
###     

