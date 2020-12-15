const path = require('path');

module.exports = {
  entry: ['./client/src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '*', '.js', '.jsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};

// const path = require("path"); // node's path module
// const htmlWebpackPlugin = require("html-webpack-plugin");
// creates your html with all jsx bundled to es5

// module.exports = {
// entry: "./index.js",
//   output: { // path to the bundle
//     path: path.join(__dirname, "/bundle"),
//     filename: "bundle.js",
//   },
//   devServer: { // dev server configuration
//     inline: true,
//     port: 3007,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)?$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         query: {
//           cwd: __dirname,
//           presets: ["@babel/preset-env", "@babel/preset-react"],
//         },
//       },
//     ],
//   },
//   plugins: [
//     new htmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
// };
