const webdriver = require('selenium-webdriver'),
   By = webdriver.By,
   until = webdriver.until;
const chrome = require("selenium-webdriver/chrome");
var getenv = require('getenv');
const chromeCapabilities = webdriver.Capabilities.chrome();
const chromeOptions = {
   'args': ['--load-extension=C:/KeshriKundanAccess/extension/a11yChromeExtn']
}; //set the path of extension
var host = getenv('ACCESSIBILITY');
console.log(host);
chromeCapabilities.set('chromeOptions', chromeOptions);
const driver = new webdriver.Builder()
.withCapabilities(chromeCapabilities)
.forBrowser("chrome")
.build();
driver.get("http://localhost:3000/");
//driver.wait(1000);
//driver.quit();
