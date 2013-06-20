module.exports = function(grunt) {

	// load modules for use
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		
		stylus: {
		  dist: {
		    options: {
		      compress: true,
		      paths: [ 'styles' ]
		    },
		    files: {
		      'css/style.css': 'css/*.styl'
		    }
		  }
		},

		// watch and perform task on change
		watch: {
		  files: 'css/*.styl',
		  tasks: 'stylus'
		}

	});

	grunt.registerTask('default', ['stylus','watch']);
}