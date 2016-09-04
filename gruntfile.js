module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-express-server');

grunt.initConfig({
  express: {
    options: {
      port: 3000
    },
    dev: {
      options: {
        script: 'src/server.js'
      }
    }
  }
});

grunt.registerTask('start', [ 'express:dev']);

}; port: 3000