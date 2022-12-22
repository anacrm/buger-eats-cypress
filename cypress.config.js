const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9rbctu",
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    "reportDir": "cypress/reports/mochawesome-report",
    "overwrite": false,
    "html": false,
    "json": true,
    "timestamp": "mmddyyyy_HHMMss"
  }
});
