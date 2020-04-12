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
formatter.scenarioOutline({
  "line": 23,
  "name": "Sign up with demoblaze website",
  "description": "",
  "id": "demoblaze-website;sign-up-with-demoblaze-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TestCase1_Demoblaze"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the user clicks the sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on singup",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user take the screenshots",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "demoblaze-website;sign-up-with-demoblaze-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 31,
      "id": "demoblaze-website;sign-up-with-demoblaze-website;;1"
    },
    {
      "cells": [
        "jyothi",
        "raj"
      ],
      "line": 32,
      "id": "demoblaze-website;sign-up-with-demoblaze-website;;2"
    },
    {
      "cells": [
        "Kiran",
        "Nandha"
      ],
      "line": 33,
      "id": "demoblaze-website;sign-up-with-demoblaze-website;;3"
    },
    {
      "cells": [
        "chandana",
        "chow"
      ],
      "line": 34,
      "id": "demoblaze-website;sign-up-with-demoblaze-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Sign up with demoblaze website",
  "description": "",
  "id": "demoblaze-website;sign-up-with-demoblaze-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TestCase1_Demoblaze"
    },
    {
      "line": 19,
      "name": "@Demoblaze"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the user clicks the sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user enter the \"jyothi\" and \"raj\" and clicks on singup",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user take the screenshots",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSignup.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 34792912500,
  "status": "passed"
});
formatter.match({
  "location": "TestSignup.the_user_clicks_the_sign_up_link()"
});
formatter.result({
  "duration": 10647165400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jyothi",
      "offset": 20
    },
    {
      "val": "raj",
      "offset": 33
    }
  ],
  "location": "TestSignup.the_user_enter_the_and_and_clicks_on_singup(String,String)"
});
formatter.result({
  "duration": 3116275900,
  "status": "passed"
});
formatter.match({
  "location": "TestSignup.user_take_the_screenshots()"
});
formatter.result({
  "duration": 17568555000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Sign up with demoblaze website",
  "description": "",
  "id": "demoblaze-website;sign-up-with-demoblaze-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TestCase1_Demoblaze"
    },
    {
      "line": 19,
      "name": "@Demoblaze"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the user clicks the sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user enter the \"Kiran\" and \"Nandha\" and clicks on singup",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user take the screenshots",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSignup.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 16772664500,
  "status": "passed"
});
formatter.match({
  "location": "TestSignup.the_user_clicks_the_sign_up_link()"
});
formatter.result({
  "duration": 8315219900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kiran",
      "offset": 20
    },
    {
      "val": "Nandha",
      "offset": 32
    }
  ],
  "location": "TestSignup.the_user_enter_the_and_and_clicks_on_singup(String,String)"
});
formatter.result({
  "duration": 1249738200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003cinput id\u003d\"sign-username\" class\u003d\"form-control\" type\u003d\"text\"\u003e is not reachable by keyboard\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027KIRAN-PC\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 75.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200403170909, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 3456, moz:profile: C:\\Users\\admin\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1d99fed1-3abb-4a29-bd7e-bd0709b53c76\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat com.cts.pages.SignUp.SignupDeatils(SignUp.java:67)\r\n\tat com.cts.stepstoexe.TestSignup.the_user_enter_the_and_and_clicks_on_singup(TestSignup.java:31)\r\n\tat ✽.When the user enter the \"Kiran\" and \"Nandha\" and clicks on singup(src/main/resources/feature/Test.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSignup.user_take_the_screenshots()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Sign up with demoblaze website",
  "description": "",
  "id": "demoblaze-website;sign-up-with-demoblaze-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TestCase1_Demoblaze"
    },
    {
      "line": 19,
      "name": "@Demoblaze"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the user clicks the sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user enter the \"chandana\" and \"chow\" and clicks on singup",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user take the screenshots",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSignup.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 27970943500,
  "status": "passed"
});
formatter.match({
  "location": "TestSignup.the_user_clicks_the_sign_up_link()"
});
formatter.result({
  "duration": 5397409900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandana",
      "offset": 20
    },
    {
      "val": "chow",
      "offset": 35
    }
  ],
  "location": "TestSignup.the_user_enter_the_and_and_clicks_on_singup(String,String)"
});
formatter.result({
  "duration": 575710900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003cinput id\u003d\"sign-username\" class\u003d\"form-control\" type\u003d\"text\"\u003e is not reachable by keyboard\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027KIRAN-PC\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 75.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200403170909, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 9212, moz:profile: C:\\Users\\admin\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9f05664c-5cf3-4ceb-ba9d-2a4a0ea25eb7\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat com.cts.pages.SignUp.SignupDeatils(SignUp.java:67)\r\n\tat com.cts.stepstoexe.TestSignup.the_user_enter_the_and_and_clicks_on_singup(TestSignup.java:31)\r\n\tat ✽.When the user enter the \"chandana\" and \"chow\" and clicks on singup(src/main/resources/feature/Test.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSignup.user_take_the_screenshots()"
});
formatter.result({
  "status": "skipped"
});
});