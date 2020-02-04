Feature: I am going to validate my website functionalities

@calculatortesting
Scenario: Calculator Add functionality testing

Given I will navigate to Calc site 
When I add two numbers "3" and "5"
Then the output displayed should be "8"

@calculatortesting
Scenario: Calculator Add functionality testing

Given I will navigate to Calc site 
When I add two numbers "2" and "8"
Then the output displayed should be "10"

@angulartesting
Scenario Outline: Angular validations

Given I will navigate to "AngularJs" page 
When I clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search Box

Examples:
| key | 
| hello |
| hey |
| hi |


