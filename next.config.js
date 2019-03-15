const withSass = require('@zeit/next-sass')
// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   }
// }

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})

// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
// module.exports = withSass(withCss({
//   webpack(config) {
//     config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
//     return config
//   }
// }))

