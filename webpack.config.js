const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const configImport = (mode) => require(`./configs/webpack.${mode}`)(mode);

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
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
          MiniCssExtractPlugin.loader,
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
        shared: [
          {
            react: {
              requiredVersion: '^17.0.2',
              singleton: true,
            },
          }],
      },
    ),
    new MiniCssExtractPlugin({
      chunkFilename: 'portfolio.css',
    }),
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
        'src/public/robots.txt',
        'src/public/preview.png',
        { from: 'datas/', to: 'datas/' },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
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
