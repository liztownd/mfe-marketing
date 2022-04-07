// const { whenDev, whenProd } = require("@craco/craco");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const webpack = require("webpack");
// const packageJson = require("./package.json");

// module.exports = {
//   reactScriptsVersion: "react-scripts",
//   webpack: {
//     plugins: {
//       add: [
//         ...whenDev(
//           () => [
//             new ModuleFederationPlugin({
//               name: "marketing",
//               filename: "remoteEntry.js",
//               exposes: {
//                 "./MarketingApp": "./src/bootstrap",
//               },
//               shared: packageJson.dependencies,
//             }),
//             new webpack.LoaderOptionsPlugin({
//               output: {
//                 publicPath: "http://localhost:8081/",
//               },
//             }),
//           ],
//           []
//         ),
//         ...whenProd(
//           () => [
//             new ModuleFederationPlugin({
//               name: "marketing",
//               filename: "remoteEntry.js",
//               exposes: {
//                 "./MarketingApp": "./src/bootstrap",
//               },
//               shared: packageJson.dependencies,
//             }),
//             new webpack.LoaderOptionsPlugin({
//               output: {
//                 filename: "[name].[contenthash].js",
//                 publicPath: "/marketing/latest/",
//               },
//             }),
//           ],
//           []
//         ),
//       ],
//     },
//   },
//   configure: {
//     optimization: {
//       runtimeChunk: false,
//       splitChunks: {
//         chunks(chunk) {
//           return false;
//         },
//       },
//     },
//   },
//   devServer: {
//     port: 8081,
//     historyApiFallback: {
//       index: "index.html",
//     },
//   },
// };

module.exports = {
    devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
      {
          plugin: require("./craco-plugins/module-federation")
      },
  ],
};