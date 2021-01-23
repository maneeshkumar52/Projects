$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceValidatiion.feature");
formatter.feature({
  "line": 1,
  "name": "Validaton of SauceDemo Feature",
  "description": "",
  "id": "validaton-of-saucedemo-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# Scenario: SauceDemo Test Vaidation 1"
    },
    {
      "line": 4,
      "value": "#    Given Open the Browser"
    },
    {
      "line": 5,
      "value": "#    And Enter the URL"
    },
    {
      "line": 6,
      "value": "#    When Enter the username and password"
    },
    {
      "line": 7,
      "value": "#      | username      | password     |"
    },
    {
      "line": 8,
      "value": "#      | standard_user | secret_sauce |"
    },
    {
      "line": 9,
      "value": "#      | problem_user  | secret_sauce |"
    },
    {
      "line": 10,
      "value": "#    And Click on Login Button"
    },
    {
      "line": 11,
      "value": "#   And Click on Add to Cart Button"
    },
    {
      "line": 12,
      "value": "#   And Click on AddtoCart Icon"
    },
    {
      "line": 13,
      "value": "#    And Click on Checkout"
    },
    {
      "line": 14,
      "value": "#    Then Enter the FirstName, LastName and ZipCode"
    },
    {
      "line": 15,
      "value": "#   And Click Continue button"
    },
    {
      "line": 16,
      "value": "#   And Click on Finish Button"
    },
    {
      "line": 17,
      "value": "#   And Click on Menu"
    },
    {
      "line": 18,
      "value": "#   And Click on Logout Button"
    },
    {
      "line": 19,
      "value": "#   And Close the Browser"
    }
  ],
  "line": 21,
  "name": "SauceDemo Test Vaidation 1",
  "description": "",
  "id": "validaton-of-saucedemo-feature;saucedemo-test-vaidation-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Enter the URL",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on AddtoCart Icon",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter the FirstName \"\u003cfirstname\u003e\" , LastName \"\u003clastname\u003e\" and ZipCode \"\u003czipcode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Finish Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on Menu",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on Logout Button",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "validaton-of-saucedemo-feature;saucedemo-test-vaidation-1;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "zipcode"
      ],
      "line": 37,
      "id": "validaton-of-saucedemo-feature;saucedemo-test-vaidation-1;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Maneesh",
        "Kumar",
        "560037"
      ],
      "line": 38,
      "id": "validaton-of-saucedemo-feature;saucedemo-test-vaidation-1;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "Satish",
        "Test",
        "456894"
      ],
      "line": 39,
      "id": "validaton-of-saucedemo-feature;saucedemo-test-vaidation-1;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6721200,
  "status": "passed"
});
formatter.before({
  "duration": 198100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "SauceDemo Test Vaidation 1",
  "description": "",
  "id": "validaton-of-saucedemo-feature;saucedemo-test-vaidation-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Enter the URL",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the username \"standard_user\" and password \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on AddtoCart Icon",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter the FirstName \"Maneesh\" , LastName \"Kumar\" and ZipCode \"560037\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Finish Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on Menu",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on Logout Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.open_the_Browser()"
});
formatter.result({
  "duration": 6951034600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_URL()"
});
formatter.result({
  "duration": 1214359200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 20
    },
    {
      "val": "secret_sauce",
      "offset": 49
    }
  ],
  "location": "Steps.enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 590786400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_Button()"
});
formatter.result({
  "duration": 4282178200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_to_Cart_Button()"
});
formatter.result({
  "duration": 2539861800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_AddtoCart_Icon()"
});
formatter.result({
  "duration": 2692904900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Checkout()"
});
formatter.result({
  "duration": 2697967400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maneesh",
      "offset": 21
    },
    {
      "val": "Kumar",
      "offset": 42
    },
    {
      "val": "560037",
      "offset": 62
    }
  ],
  "location": "Steps.enter_the_FirstName_LastName_and_ZipCode(String,String,String)"
});
formatter.result({
  "duration": 2575757400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_Continue_button()"
});
formatter.result({
  "duration": 2701528200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Finish_Button()"
});
formatter.result({
  "duration": 2882579400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Menu()"
});
formatter.result({
  "duration": 2417887200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Logout_Button()"
});
formatter.result({
  "duration": 2476792800,
  "status": "passed"
});
formatter.after({
  "duration": 112561300,
  "status": "passed"
});
formatter.before({
  "duration": 323700,
  "status": "passed"
});
formatter.before({
  "duration": 392400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "SauceDemo Test Vaidation 1",
  "description": "",
  "id": "validaton-of-saucedemo-feature;saucedemo-test-vaidation-1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Enter the URL",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the username \"problem_user\" and password \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on AddtoCart Icon",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter the FirstName \"Satish\" , LastName \"Test\" and ZipCode \"456894\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Finish Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on Menu",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on Logout Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.open_the_Browser()"
});
formatter.result({
  "duration": 5490188900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_URL()"
});
formatter.result({
  "duration": 731529500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 20
    },
    {
      "val": "secret_sauce",
      "offset": 48
    }
  ],
  "location": "Steps.enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 615968300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_Button()"
});
formatter.result({
  "duration": 3611791300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_to_Cart_Button()"
});
formatter.result({
  "duration": 2424912500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_AddtoCart_Icon()"
});
formatter.result({
  "duration": 2502227100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Checkout()"
});
formatter.result({
  "duration": 2685728800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Satish",
      "offset": 21
    },
    {
      "val": "Test",
      "offset": 41
    },
    {
      "val": "456894",
      "offset": 60
    }
  ],
  "location": "Steps.enter_the_FirstName_LastName_and_ZipCode(String,String,String)"
});
formatter.result({
  "duration": 2601011800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_Continue_button()"
});
formatter.result({
  "duration": 2531201300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Finish_Button()"
});
formatter.result({
  "duration": 2538485600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Menu()"
});
formatter.result({
  "duration": 2412233500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Logout_Button()"
});
formatter.result({
  "duration": 2448839500,
  "status": "passed"
});
formatter.after({
  "duration": 64895500,
  "status": "passed"
});
});