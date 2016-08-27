grunt.loadNpmTasks('grunt-express-server');

grunt.initConfig({
  express: {
    options: {
      port: 5000,
    },
    dev: {
      options: {
        script: 'src/index.html'
      }
    }
  }
});

grunt.registerTask('start', [ 'express:dev']);