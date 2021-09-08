// const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');

// const nextConfig = {
//   // reactStrictMode: true,
//   images: {
//     domains: ['www.pinterest.com']
//   }
// }

// module.exports = withPlugins([[withImages]], nextConfig)

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.pinterest.com','www.pinterest.com/pin' ,'unsplash.com/photos','unsplash.com'],
  },
  // disableStaticImages: true,
  // future: {
  //   webpack5: true,
  // },
  // webpack: function (config, options) {
  //   config.experiments = {};
  //   return config;
  // },
}
