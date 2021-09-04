const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/dev.html',
    }),
  ],
});
