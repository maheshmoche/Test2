import { Config } from "protractor/built/config";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    seleniumaddress: 'http://localhost:4444/wd/hub',
    // directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    //specs: ['testspec.js'],
    specs: ['../features/first.feature'],
    cucumberOpts: {
       // tags: "@angulartesting",
        format: 'json:./cucumberreport.json',
        onComplete: () => {

            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreport.json',
                output: './cucumbertest_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  79.0.3945.130",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };

            reporter.generate(options);
        },
        require: [
            'F:/protractorframework/JSFiles/stepDefinitions/steps.js' // accepts a glob
        ]
    }
};
