module.exports = function(grunt) {
   
   // Configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
         build: {
            src: [
               'dev/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js',
               'dev/js/main.js'
            ],
            dest: 'build/js/main.min.js'
         }
      },
      compass: {
         dev: {
            options:{
               sassDir: 'dev/scss',
               cssDir:'build/css',
               outputStyle: 'compressed',
               noLineComments: true,
               cacheDir: 'cache/.sass-cache'
            }
         }
      },
      imagemin: {
         dynamic: {
            files: [{
               expand: true,
               cwd: 'dev/images/',
               src: ['**/*.{png,jpg,gif}'],
               dest: 'build/images/'
            }]
         }
      },
      jshint: {
         all: [
            'Gruntfile.js', 
            'dev/js/**/*.js',
            '!dev/js/vendor/**'
         ]
      },
      watch: {
         styles: { 
            files: ['dev/scss/*.scss'],
            tasks: ['compass'],
            options: {
               livereload: true
            }
         },
         scripts: {
            files: ['dev/js/**/*.js'], 
            tasks: ['jshint', 'uglify'],
            options: {
               livereload: true
            }
         },
         images: {
            files: ['dev/images/**/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
            options: {
               livereload: true
            }
         },
         html: {
            files: ['build/index.html'],
            options: {
               livereload: true
            }
         }
      },
      connect: {
         dev: {
            options: {
               base: 'build/',
               port: '8000',
               open: {
                  target: 'http://localhost:8000'
               },
               livereload: true,
            }
         }
      }
   });

   // Load plugins.
   grunt.loadNpmTasks('grunt-contrib-uglify');        //compress js files
   grunt.loadNpmTasks('grunt-contrib-compass');       //compass
   grunt.loadNpmTasks('grunt-contrib-imagemin');      //minify images
   grunt.loadNpmTasks('grunt-contrib-jshint');        //JS file validation
   grunt.loadNpmTasks('grunt-contrib-watch');         //watch
   grunt.loadNpmTasks('grunt-contrib-connect');       //Start a connect web server.


   // Default task(s).
   grunt.registerTask('default', ['connect', 'watch']);

};