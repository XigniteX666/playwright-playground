const { webkit, devices } = require('playwright');
const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const scope = require("../utils/scope");

Given("I am on the Jumbo pdp page", async function () {
  scope.browser = await webkit.launch({ headless: false });
  scope.context.browserContext = await scope.browser.newContext(scope.options)
  scope.context.currentPage = await scope.context.browserContext.newPage();
  return await scope.context.currentPage.goto('https://www.jumbo.com/dole-bananen-ca-5-stuks-1kg/207395ZK');

});

When("I add the product to the cart", async function () {
  await scope.context.currentPage.$eval('.absolute.green.jum-button.justify-content-center.left-0.no-wrap.pr.w-100', el => el.click())
  await scope.context.currentPage.$eval('.absolute.green.jum-button.justify-content-center.left-0.no-wrap.pr.w-100', el => el.blur())
  await scope.context.currentPage.waitForTimeout(50000)
});


Then('the cart should display 1', async function () {
  let pageTitle = await scope.context.currentPage.title();
  expect(pageTitle).to.contain("Jumbo Groceries");
});