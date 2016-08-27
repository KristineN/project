module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-express-server');

grunt.initConfig({
  express: {
    options: {
      // Override defaults here
    },
    dev: {
      options: {
        script: 'src/server.js'
      }
    }
  }
});

grunt.registerTask('start', [ 'express:dev']);

};