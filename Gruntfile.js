module.exports = function(grunt) {

	// load modules for use
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		pkg     : grunt.file.readJSON('package.json'),
		stylus: {
			dist: {
				options: {
					compress: true,
					paths: [ 'styles' ]
				},
				files: {
					'css/style.css': 'css/style.styl'
				}
			}
		},
		uglify: {
     		files: {
        		src: 'js/<%= pkg.name %>.js',
        		dest: 'js/<%= pkg.name %>.min.js'
      		}
    	},
		watch: {
			css:{
				files: 'css/*.styl',
				tasks: 'stylus',
		  		options:{ livereload: true }
			},
		  	scripts:{
				files: ['js/*.js','*.php'],
				options:{ livereload: true }
			},
  			scripts: {
  				options: { nospawn: true },
    			files: ['js/<%= pkg.name %>.js'],
    			tasks: ['uglify']
  			}
		}

	});

	grunt.registerTask('default', ['stylus','watch','uglify']);
}