'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['**/*.js']
      }
    },
    watch: {
      all: {
        files: '<%= jshint.all.src %>',
        tasks: ['default']
      }
    }
  });
  grunt.registerTask('default', ['jshint']);
};