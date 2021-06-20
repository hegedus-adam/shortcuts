module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  const mode = {
    development: 'dev',
    production: 'prod',
  };

  return require(`./webpack/webpack.config.${mode[argv.mode]}.js`);
};
