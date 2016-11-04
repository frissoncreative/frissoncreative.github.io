var gulp			= require('gulp');
var sass			= require('gulp-ruby-sass');
var minify			= require('gulp-minify-css');
var plumber			= require('gulp-plumber');
var notify 			= require('gulp-notify');
var rename 			= require('gulp-rename');
var autoprefixer 	= require('gulp-autoprefixer');


var paths = {
	styles: 'scss/styles.scss'
};

// SASS Task
gulp.task('sass', function () {
	return sass(paths.styles)
		.pipe(plumber())

		// error message
		.on('error', function (err) {
			console.error('Error!', err.message);
		})

        .pipe(autoprefixer())

		//save to dist folder
		.pipe(gulp.dest('styles'))

		//minify and add .min
		.pipe(minify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('styles'))

		//success
		.pipe(notify("Successfully compiled SASS"))
});

// DEFAULT Task
gulp.task('default', function() {
	// Run the sass and scripts task
	gulp.start('sass');

	// Watch .scss files
	gulp.watch('scss/*.scss', ['sass']);
});
