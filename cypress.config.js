const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ro3jgz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
