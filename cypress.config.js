const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // move baseUrl here
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
