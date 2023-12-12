const { environment } = require('@rails/webpacker');

module.exports = environment;

// Example entry configuration
environment.config.merge({
  entry: {
    application: './app/javascript/application.js',
  },
});
