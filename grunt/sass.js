// Compile Sass to CSS
module.exports = {
	main: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= theme.sass %>',
			src: [ '*.{sass,scss}' ],
			dest: '<%= theme.css %>',
			ext: '.css'
		}]
	}
}
