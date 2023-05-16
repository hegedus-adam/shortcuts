const path = require('path');
const config = require('./webpack.config.shared');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 8080,
  },
};
