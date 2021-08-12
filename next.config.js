const path = require('path')

module.exports = {
  images: {
    loader: 'custom'
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ]
  }
}
