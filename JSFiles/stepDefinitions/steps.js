"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../PageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomepage_1 = require("../PageObjects/angularHomepage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var calc = new calculator_1.calculator();
var ah = new angularHomepage_1.angularHomepage();
cucumber_1.Given('I will navigate to Calc site', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo");
}));
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(this, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo");
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I clicked on header link', () => __awaiter(this, void 0, void 0, function* () {
    yield ah.angularLink.click();
}));
cucumber_1.When('you will navigate to angular page', () => __awaiter(this, void 0, void 0, function* () {
    console.log("navigate to new page");
}));
cucumber_1.Then('you will enter {string} in search Box', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.be.a('string');
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwREFBdUQ7QUFDdkQsMkNBQXFDO0FBQ3JDLG9FQUFpRTtBQUNqRSxnREFBd0I7QUFFeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUUvQixnQkFBSyxDQUFDLDhCQUE4QixFQUFFLEdBQVMsRUFBRTtJQUM3QyxvRUFBb0U7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDdkQsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztLQUNqRTtTQUNJLElBQUksTUFBTSxJQUFJLFdBQVcsRUFBRTtRQUM1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDL0M7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVMsRUFBRTtJQUV4QyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMzRCxvRUFBb0U7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDdEUsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDN0Qsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNyQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=