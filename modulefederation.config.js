const deps = require("./package.json").dependencies;

module.exports = {
  name: "marketing",
  filename: 'remoteEntry.js',
  exposes: {
      './MarketingApp': './src/bootstrap',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
