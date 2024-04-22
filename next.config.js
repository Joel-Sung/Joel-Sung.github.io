const path = require('path')

module.exports = {
  output: 'export',
  images: {
    domains: ['cdn.sanity.com'],
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
