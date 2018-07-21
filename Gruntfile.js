module.exports = function(grunt) { //eslint-disable-line
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        cssmin: {
          target: {
            files: {
              'index.min.css': ['index.css']
            }
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', [ 'cssmin']);
    
};