import { browser, element, by } from 'protractor';
import { calculator } from './PageObjects/calculator';
import { angularHomepage } from './PageObjects/angularHomepage';


describe('chain locators demo', () => {
    it('open angular js website', async () => {

        var calc = new calculator();

        await browser.get("http://juliemr.github.io/protractor-demo");

        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");

        await calc.go.click()
        calc.getResult.getText().then(function (text) {
            console.log(text);
        })
    });

    it('Angular home page title validation', async () => {
        var ah = new angularHomepage();
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");
    });
});