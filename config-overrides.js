const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@helpers": "src/_helpers",
    "@styles": "src/_styles",
    "@api": "src/api",
    "@components": "src/components",
    "@pages": "src/pages",
    "@redux": "src/redux",
  })(config);

  return config;
};
