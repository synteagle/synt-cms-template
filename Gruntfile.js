module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Theme paths
			theme: {
				main: 'theme',
				coffee: '<%= theme.main %>/static/coffee',
				js: '<%= theme.main %>/static/js',
				jade: '<%= theme.main %>/static/jade/pages',
				sass: '<%= theme.main %>/static/sass',
				stylus: '<%= theme.main %>/static/stylus',
				css: '<%= theme.main %>/static/css',
				images: '<%= theme.main %>/static/images',
				helpers: '<%= theme.main %>/static/helpers',
				devtools: '<%= theme.main %>/static/devtools',
				html: '<%= theme.main %>'
			},
			// Server path
			server: {
				main: 'theme',
				js: '<%= server.main %>/static/js',
				css: '<%= server.main %>/static/css',
				html: '<%= server.main %>'
			}
		},
		loadGruntTasks: {
			pattern: ['grunt-*', 'main-*'],
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
