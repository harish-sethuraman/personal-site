const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  output: {
    publicPath: 'https://strek.in/',
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:png|jpg|jpeg|svg|webp)$/, /_redirects/, /_headers/],
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 10,
            },
          },
        },
      ],
    })],
});
