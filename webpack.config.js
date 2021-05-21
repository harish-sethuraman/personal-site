const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const configImport = (mode) => require(`./configs/webpack.${mode}`)(mode);

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif|svg|webp)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader'],
      },
      {
        test: /\.js|json$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'PORTFOLIO',
        filename:
          'remoteEntry.js',
        exposes: {
          './Portfolio':
            './src/components/app/index.js',
        },
        shared: [{ react: { singleton: true } }],
      },
    ),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'docs/**/*')],
    }),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        'src/public/img',
        'src/public/manifest.json',
        'src/public/_redirects',
        { from: 'datas/', to: 'datas/' },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
module.exports = (env, { mode }) => merge(
  commonConfig,
  configImport(mode),
);
