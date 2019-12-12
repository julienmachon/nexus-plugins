const path = require("path");
const config = require("../../webpack.config");

const pkg = require(__dirname + "/package.json");
const peerDeps = Object.keys(pkg.peerDependencies || {}).reduce(
  (prev, curr) => ({ ...prev, [curr]: curr }),
  {}
);

console.log(peerDeps);

const outputPath = path.resolve(__dirname, "dist");
module.exports = config(outputPath, peerDeps);
