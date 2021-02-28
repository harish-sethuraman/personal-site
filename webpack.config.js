const htmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "docs"),
    // filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif|svg|webp|json)$/i,
        loader: "file-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
           "css-loader"],
      },
      {
        test: /\.js|json$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "docs/**/*")],
    }),
    new htmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 10,
            },
          },
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        "src/public/img",
        "src/public/manifest.json",
        { from: "datas/data.json", to: "datas/" },
      ],
    }),
  ],
  optimization: {
    minimize : true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
