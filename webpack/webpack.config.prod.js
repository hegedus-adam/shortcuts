const path = require('path');
const config = require('./webpack.config.shared');

module.exports = {
  ...config,
  mode: 'production',
  optimization: {
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    mangleExports: 'deterministic',
    nodeEnv: 'production',
    flagIncludedChunks: true,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
    emitOnErrors: false,
    checkWasmTypes: true,
    minimize: true,
  },
};
