const path = require('path');
const config = require('./webpack.config.shared');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 8080,
  },
  // optimization: {
  //   moduleIds: 'named',
  //   chunkIds: 'named',
  //   mangleExports: false,
  //   nodeEnv: 'development',
  //   flagIncludedChunks: false,
  //   occurrenceOrder: false,
  //   concatenateModules: false,
  //   splitChunks: {
  //     hidePathInfo: false,
  //     minSize: 10000,
  //     maxAsyncRequests: Infinity,
  //     maxInitialRequests: Infinity,
  //   },
  //   emitOnErrors: true,
  //   checkWasmTypes: false,
  //   minimize: false,
  //   removeAvailableModules: false,
  //   // moduleIds: 'deterministic',
  //   // runtimeChunk: 'single',
  //   // splitChunks: {
  //   //   cacheGroups: {
  //   //     vendor: {
  //   //       test: /[\\/]node_modules[\\/]/,
  //   //       name: 'vendors',
  //   //       chunks: 'all',
  //   //     },
  //   //   },
  //   // },
  // },
};
