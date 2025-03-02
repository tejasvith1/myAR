const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false, // Fix for 'fs' module error
  };
  config.plugins = (config.plugins || []).concat([new NodePolyfillPlugin()]);
  return config;
};
