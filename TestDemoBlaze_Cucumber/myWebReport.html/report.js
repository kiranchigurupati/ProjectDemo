$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Demoblaze website",
  "description": "",
  "id": "demoblaze-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@Demoblaze"
    }
  ]
});
formatter.scenario({
  "line": 71,
  "name": "Delete and logout",
  "description": "",
  "id": "demoblaze-website;delete-and-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@TestCase5_Demoblaze"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "user launches Chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "user login to the page and select the product",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "the user delete the product from the cart",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user will logout from site",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "captures screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDelAndOut.user_launches_Chromebrowser()"
});
formatter.result({
  "duration": 81463199500,
  "status": "passed"
});
formatter.match({
  "location": "TestDelAndOut.user_login_to_the_page_and_select_the_product()"
});
formatter.result({
  "duration": 19823229000,
  "status": "passed"
});
formatter.match({
  "location": "TestDelAndOut.the_user_delete_the_product_from_the_cart()"
});
formatter.result({
  "duration": 16557944700,
  "status": "passed"
});
formatter.match({
  "location": "TestDelAndOut.user_will_logout_from_site()"
});
formatter.result({
  "duration": 1776121200,
  "status": "passed"
});
formatter.match({
  "location": "TestDelAndOut.captures_screenshot()"
});
formatter.result({
  "duration": 8721998800,
  "status": "passed"
});
});