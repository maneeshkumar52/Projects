Feature: Validaton of SauceDemo Feature

  # Scenario: SauceDemo Test Vaidation 1
  #    Given Open the Browser
  #    And Enter the URL
  #    When Enter the username and password
  #      | username      | password     |
  #      | standard_user | secret_sauce |
  #      | problem_user  | secret_sauce |
  #    And Click on Login Button
  #   And Click on Add to Cart Button
  #   And Click on AddtoCart Icon
  #    And Click on Checkout
  #    Then Enter the FirstName, LastName and ZipCode
  #   And Click Continue button
  #   And Click on Finish Button
  #   And Click on Menu
  #   And Click on Logout Button
  #   And Close the Browser
  
  Scenario Outline: SauceDemo Test Vaidation 1
    Given Open the Browser
    And Enter the URL
    When Enter the username "<username>" and password "<password>"
    And Click on Login Button
    And Click on Add to Cart Button
    And Click on AddtoCart Icon
    And Click on Checkout
    Then Enter the FirstName "<firstname>" , LastName "<lastname>" and ZipCode "<zipcode>"
    And Click Continue button
    And Click on Finish Button
    And Click on Menu
    And Click on Logout Button


    Examples: 
      | username      | password     | firstname | lastname | zipcode |
      | standard_user | secret_sauce | Maneesh   | Kumar    |  560037 |
      | problem_user  | secret_sauce | Satish    | Test     |  456894 |
