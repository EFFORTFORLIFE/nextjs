// next.config.js
console.log(',process.env', process.env);
const path = require('path')
module.exports = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.mydomain.com' : '',
  webpack: (config, {}) => {return config},
  sassOptions: {
    includePaths: [path.join(__dirname, 'pages')],
  },
}