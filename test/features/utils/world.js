const { setDefaultTimeout, setWorldConstructor } = require("cucumber");
const scope = require("./scope");

const World = function ({ attach, parameters }) {
  this.attach = attach;
  this.parameters = parameters;

  let opts = {
    headless: false,
    slowMo: 250,
    timeout: 1000,
  };

  scope.options = opts;
  scope.context = {};
}

setDefaultTimeout(30 * 1000);
setWorldConstructor(World);