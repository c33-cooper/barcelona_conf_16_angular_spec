# barcelona_conf_16_angular_spec

## To boot single page app :
1. Install a localhost server to your machine `(i.e - XAMPP - https://www.apachefriends.org/index.html)`
2. git clone repo to your localhost server documents path directory.
3. Access the login page by hitting - `(http://localhost/barcelona_conf_16_angular_spec/#/login) within your browser.`
4. Authenticate with the following credentials -
    `username: admin`
    `password: pigsInBlankets`

## Run end-to-end UI tests with Protractor :
1. Ensure Node and NPM are installed on your machine. - https://nodejs.org/en/
2. Install WebDriver manager through NPM on your machine with - `npm install -g webdriver-manager`
3. Update WebDriver manager with - `webdriver-manager update`
4. Start the webdriver manager localhost server with - `webdriver-manager start`
5. cd into spec directory and run the Protractor configuration file with `protractor conf.js` (NOTE : This is where you will specify the config for your tests i.e which specs to run, which browser you wish to them to run in, time intervals for each test etc...)
