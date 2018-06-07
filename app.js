const webdriver = require('selenium-webdriver'),
   By = webdriver.By,
   until = webdriver.until;
const chrome = require("selenium-webdriver/chrome");
const chromeCapabilities = webdriver.Capabilities.chrome();
const chromeOptions = {
   'args': ['--load-extension=C:/A11YExtensionTarget']
}; //set the path of extension

chromeCapabilities.set('chromeOptions', chromeOptions);
//const a11yUrlStart = 'https://localhost:3005/api/registerRunDetail?teamName=MPagesAT3&component=PatientInformationTest1&trigger=CIT&run=start';

const driver = new webdriver.Builder()
.withCapabilities(chromeCapabilities)
.forBrowser("chrome")
.build();
driver.get("http://localhost:4200/");
//driver.wait(1000);
//driver.quit();
