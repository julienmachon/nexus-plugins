const path = require("path");
const config = require("../../webpack.config");

const outputPath = path.resolve(__dirname, "dist");
module.exports = config(outputPath);
