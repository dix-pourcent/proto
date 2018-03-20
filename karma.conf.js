const serverMock = require('./server-mock')

module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: ['browserify', 'jasmine', 'websocket-server'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/pixi.js/dist/pixi.min.js',
      { pattern: 'tests/**/*-test.js', watched: true },
    ],

    exclude: [],

    plugins: [
      'karma-websocket-server',
      'karma-jasmine',
      'karma-websocket-server',
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-browserify',
    ],

    preprocessors: {
      'tests/**/*-test.js': ['browserify'],
    },


    babelPreprocessor: {
      options: {
        presets: ['es2015']
      }
    },

    reporters: ['spec'],

    browserify: {
      debug: true,
      transform: [
        [ 'babelify', { presets: ['es2015'] } ],
      ]
    },

    websocketServer: serverMock,

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
}