import { Given, When, Then } from "cucumber";
import { calculator } from "../PageObjects/calculator";
import { browser } from "protractor";
import { angularHomepage } from "../PageObjects/angularHomepage";
import chai from "chai";

var expect = chai.expect;
var calc = new calculator();
var ah = new angularHomepage();

Given('I will navigate to Calc site', async () => {
    // Write code here that turns the phrase above into concrete actions
    await browser.get("http://juliemr.github.io/protractor-demo");
});

Given('I will navigate to {string} page', async (string) => {
    if (string == "calc") {
        await browser.get("http://juliemr.github.io/protractor-demo");
    }
    else if (string == "AngularJs") {
        await browser.get("https://angularjs.org/");
    }
});

When('I clicked on header link', async () => {

    await ah.angularLink.click();
});
When('you will navigate to angular page', async () => {
    console.log("navigate to new page");
});

Then('you will enter {string} in search Box', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
    await ah.search.sendKeys(string);
});


When('I add two numbers {string} and {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);

});

Then('the output displayed should be {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.go.click()
    await calc.getResult.getText().then(function (text) {
        expect(text).to.be.a('string');
    })
});
