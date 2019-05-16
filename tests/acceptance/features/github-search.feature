

@search
Feature: Search Github

  In order to see Github Search works
  As a Github user
  I want to be able to search for repository

## If you have more than ONE datasets, use 'Scenario Outline'

  @search_repositories
  Scenario Outline: Fred is able to search for correct repository

    Given Fred is on Github Homepage
    When he searches for the "<repository>"
    Then he is able to see the "<repository>" in search results
  
    Scenarios:
    | repository |
    | codeceptjs-quick-start |
    | gkushang/codeceptjs-selenium |


## If you have one Scenario

 @search_results
  Scenario: Fred should see the highlighted results for the searched repository

    Given Fred is on Github Homepage
    When he searches for the "codeceptjs-quick-start"
    Then he sees all the detailed highlighted results including description or license info and many more
  