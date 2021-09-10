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
    domains: ['i.pinimg.com','www.pinterest.com'],
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


// module.exports = {
//   images: {
//     loader: 'imgix',
//     path: 'https://i.pinimg.com/',
//   },
// }
