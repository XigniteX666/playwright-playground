Feature: Signing into the website
  As a customer
  I want to be able to add products to my baskets
  So that I can buy my groceries

Scenario: Add product to basket

Given I am on the Jumbo pdp page
When I add the product to the cart
Then the cart should display 1