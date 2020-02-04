
import { After, Before, Status } from "cucumber";
import { browser } from "protractor";


Before({ tags: "@calculatortesting" }, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
});

After({ tags: "@calculatortesting" }, function () {
  console.log("Test is completed");
});

Before({ tags: "@angulartesting" }, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log("I need to excute first");
});
After(async function (scenario) {
  console.log("Test is completed");
  if(scenario.result.status === Status.FAILED) 
  {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }

});