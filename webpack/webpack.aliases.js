const { createWebpackAliases } = require("./webpack.helpers");

module.exports = createWebpackAliases({
  "@src": "src",
  "@components": "src/components",
  "@features": "src/features",
  "@core": "src/core",
  "@utils": "src/utils",
  "@store": "src/store",
});
