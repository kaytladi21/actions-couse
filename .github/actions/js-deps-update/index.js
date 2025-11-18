const core = require("@actions/core");

try {
  const name = core.getInput("name");
  console.log(`Yo ${name}!`);
} catch (error) {
  core.setFailed(error.message);
}
