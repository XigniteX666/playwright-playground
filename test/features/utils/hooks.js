const { After, AfterAll } = require("cucumber");
const scope = require("./scope");

After(async function (scenario) {

  if (scope.context.currentPage != undefined) {
    let screenshot = await scope.context.currentPage.screenshot();
    this.attach(screenshot, "image/png");
  }

  if (scope.browser && scope.context.currentPage) {
    const cookies = await scope.context.browserContext.cookies();
    if (cookies && cookies.length > 0) {
      await scope.context.browserContext.deleteCookies;
    }
    await scope.context.currentPage.close();
    // eslint-disable-next-line require-atomic-updates
    scope.context.currentPage = null;

  }
})

AfterAll(async () => {
  if (scope.browser) await scope.browser.close();
});