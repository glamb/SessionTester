module.exports = function (grunt) {
  grunt.config.set('sass', {
    options: {
      sourceMap: true
    },
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles',
        src: ['importer.scss'],
        dest: '.tmp/public/styles/',
        ext: '.scss'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
