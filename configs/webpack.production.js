const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = () => ({
  output: {
    publicPath: '/',
  },
  mode: 'production',
  plugins: [new WorkboxPlugin.GenerateSW({
    exclude: [/\.(?:png|jpg|jpeg|svg|webp)$/, /_redirects/],
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
