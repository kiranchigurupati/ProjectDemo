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
  "duration": 10272656100,
  "status": "passed"
});
formatter.match({
  "location": "TestDelAndOut.user_login_to_the_page_and_select_the_product()"
});
formatter.result({
  "duration": 6665961100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please fill out Username and Password.}\n  (Session info: chrome\u003d80.0.3987.163): Please fill out Username and Password.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027KIRAN-PC\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53279}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7886d2230d5fc9bbce2f67484d916ab3\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Nokia lumia 1520\u0027)]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.pages.DelAndOut.login(DelAndOut.java:45)\r\n\tat com.cts.stepstoexe.TestDelAndOut.user_login_to_the_page_and_select_the_product(TestDelAndOut.java:30)\r\n\tat ✽.When user login to the page and select the product(src/main/resources/feature/Test.feature:73)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestDelAndOut.the_user_delete_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDelAndOut.user_will_logout_from_site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDelAndOut.captures_screenshot()"
});
formatter.result({
  "status": "skipped"
});
});