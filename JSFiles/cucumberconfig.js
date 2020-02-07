"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxpRUFBbUQ7QUFFeEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxzQkFBc0I7SUFDdEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFDRCx5QkFBeUI7SUFDekIsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFDcEMsWUFBWSxFQUFFO1FBQ1gsMkJBQTJCO1FBQzFCLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsVUFBVSxFQUFFLEdBQUcsRUFBRTtZQUViLElBQUksT0FBTyxHQUFHO2dCQUNWLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxNQUFNLEVBQUUsNEJBQTRCO2dCQUNwQyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNOLGFBQWEsRUFBRSxPQUFPO29CQUN0QixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixTQUFTLEVBQUUsdUJBQXVCO29CQUNsQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2lCQUN2QjthQUNKLENBQUM7WUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxPQUFPLEVBQUU7WUFDTCx5REFBeUQsQ0FBQyxpQkFBaUI7U0FDOUU7S0FDSjtDQUNKLENBQUMifQ==