var gulp			= require('gulp');
var sass			= require('gulp-ruby-sass');
var minify			= require('gulp-clean-css');
var plumber			= require('gulp-plumber');
var notify 			= require('gulp-notify');
var rename 			= require('gulp-rename');
var autoprefixer 	= require('gulp-autoprefixer');
var concat 			= require('gulp-concat');
var uglify 			= require('gulp-uglify');
var livereload 		= require('gulp-livereload');
var sourcemaps 		= require('gulp-sourcemaps');

var paths = {
	scripts: [
		'js/*.js'
	],
	styles: 'scss/styles.scss'
};

// SASS Task
gulp.task('sass', function () {
	return sass(paths.styles)
		.pipe(plumber())
		.pipe(sourcemaps.init())

		// error message
		.on('error', function (err) {
			console.error('Error!', err.message);
		})

        .pipe(autoprefixer())

		//save to dist folder
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/styles'))

		//minify and add .min
		.pipe(minify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public/styles'))

		//success
		.pipe(notify("Successfully compiled SASS"))
});

// JS Task
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(plumber())

		// error message
		.on('error', function (err) {
			console.error('Error!', err.message);
		})

		//save to dist folder
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('public/js'))

		//minify and add .min
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public/js'))

		//success
		.pipe(notify("Successfully compiled JS"));
});


// DEFAULT Task
gulp.task('default', function() {
	livereload.listen();

	// Run the sass and scripts task
	gulp.start('sass', 'scripts');

	// Watch .scss files
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('js/*.js', ['scripts']);
});
