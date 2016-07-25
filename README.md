# barcelona_conf_16_angular_spec

## To boot single page app :
1. Install a localhost server to your machine `(i.e - XAMPP - https://www.apachefriends.org/index.html)`
2. git clone repo to your localhost server documents path directory.
3. Access the login page by hitting - `(http://localhost/barcelona_conf_16_angular_spec/#/login) within your browser.`
4. Authenticate with the following credentials -
    `username: admin`
    `password: pigsInBlankets`

## To boot app through Lineman :
1. git clone repo anywhere on your machine.
2. cd into barcelona_conf_16_angular_spec root directory.
3. sudo npm install -g lineman
4. npm install
5. lineman run
6. Access the login page by hitting - `(http://localhost:8000/login) within your browser.`
7. Authenticate with the following credentials -
    `username: admin`
    `password: pigsInBlankets`

## To run the unit tests:
1. lineman run from 1 terminal window
2. lineman spec from another terminal window, this will launch Testem and execute specs in Chrome

## Run end-to-end UI tests with base Protractor :
1. Ensure Node and NPM are installed on your machine. - https://nodejs.org/en/
2. Install WebDriver manager through NPM on your machine with - `npm install -g webdriver-manager`
3. Update WebDriver manager with - `webdriver-manager update`
4. Start the webdriver manager localhost server with - `webdriver-manager start`
5. cd into spec directory and run the Protractor configuration file with `protractor conf.js` (NOTE : This is where you will specify the config for your tests i.e which specs to run, which browser you wish to them to run in, you can add mocked features or services here to speed up end-to-end tests with WebDriver and time intervals for each test etc...)
 
## Alternatively, run end-to-end UI tests with Protractor through Lineman/Grunt :
1. Ensure Node and NPM are installed on your machine. - https://nodejs.org/en/
2. npm install protractor
3. `lineman run` from 1 terminal window
4. `lineman grunt spec-e2e` from another terminal window

