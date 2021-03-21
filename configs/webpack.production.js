const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = () => ({
  mode: 'production',
  plugins: [new WorkboxPlugin.GenerateSW({
    exclude: [/\.(?:png|jpg|jpeg|svg)$/],
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
