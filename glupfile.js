var glup = require('gulp')
var pug = require('gulp-pug')

glup.task('pug', function() {
	return glup
		.src(['pug/**/*.pug', '!pug/**/_.pug'])
		.pipe(
			pug({
				pretty: true
			}))
		.pipe(glup.dest('./'))
})