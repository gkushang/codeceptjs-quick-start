
@search
Feature: Search Github

  In order to quick start with CodeceptJS
  As an Engineer
  I want to be able to search for CodeceptJS Quick Starter

  @search_quick_start
  Scenario: Fred is able to search for CodeceptJS quick start

    Given Fred is on Github Homepage
    When he searches for the "codeceptjs-quick-start"
    Then he is able to see the correct repository
  
