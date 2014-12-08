module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      my_target: {
        src: 'src/css/shine.css',
        dest: 'dist/css/shine.min.css'
      }
    },
    uglify: {
      my_target: {
        options: {},
        files: {
          'dist/js/shine.min.js': ['src/js/shine.js']
        }
      }
    }        
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin', 'uglify']);

};