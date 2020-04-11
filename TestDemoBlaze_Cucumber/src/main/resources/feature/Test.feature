#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Demoblaze
Feature: Demoblaze website

@TestCase1_Demoblaze
Scenario Outline: Sign up with demoblaze website
Given the user launches the browser
When the user clicks the sign up link
When the user enter the "<username>" and "<password>" and clicks on singup
Then user take the screenshots

Examples:

| username | password |
| jyothi   | raj      |
| Kiran    | Nandha   |
| chandana | chow     |


@TestCase2_Demoblaze
Scenario Outline: Login in to the demoblaze website
Given the user launch the application
When the user clicks on login link
When the user enter username as "<Username>" & password as "<Password>"
Then user takes screenshot

Examples:

| Username | Password |
| jyothi   | raj      |
| Kiran    | Nandha   |
| chandana | chow     |



@TestCase3_Demoblaze
Scenario: Selecting the mobiles from the demobalze 
Given the user launch the demoblaze application
When the user clicks on mobiles under categories
When the user click on the required mobiles and added to cart
Then user take screenshot



@TestCase4_Demoblaze
Scenario: placing the order.
Given user launches ChromeBrowser
When the user open demoBlaze
Then user will place the order
Then user captures screenshot


@TestCase5_Demoblaze
Scenario: Delete and logout
Given user launches Chromebrowser
When user login to the page and select the product
And the user delete the product from the cart
Then user will logout from site
Then captures screenshot



     
	   