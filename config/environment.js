'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'family-oscars',
    podModulePrefix: 'family-oscars/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.API_ENDPOINT = "localhost:3000/"
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV['ember-simple-auth-token'] = {
    refreshAccessTokens: true,
    // refreshLeeway: 300, // refresh 5 minutes (300 seconds) before expiration
    serverTokenEndpoint: 'auth/login/'
  };
  
  ENV['ember-toastr'] = {
    toastrOptions: {
      closeButton: true,
      debug: false,
      newestOnTop: true,
      progressBar: false,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      onclick: null,
      showDuration: '300000',
      hideDuration: '1000000',
      timeOut: '4000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut'
    }
  };
  
  // ENV['ember-simple-auth'] = {
  //   routeAfterAuthentication: 'categories',
  //   routeIfAlreadyAuthenticated: 'categories',
  // };

  return ENV;
};
