import { defineConfig } from "cypress";

export default defineConfig({   
  e2e: {
    // baseUrl: 'http://openproject:8080',
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/tests/*.{ts,tsx}',
    chromeWebSecurity: false,
    video: true,
    experimentalWebKitSupport:true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 20000,
    numTestsKeptInMemory: 5,
    testIsolation:false,
    watchForFileChanges:false,
    setupNodeEvents(on,config) {
      return config;
    }
  },
});
