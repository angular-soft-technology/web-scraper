var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
	connect = require('gulp-connect'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');


var jsSources = ['componente/scripts/*.js'];

var sassSources = ['componente/sass/style.scss'];
var htmlSources = ['client/development/*.html'];
var jsonSources = ['client/development/js/*.json'];


gulp.task('connect', function(){
	connect.server ({
		root: 'client/development/',
		livereaload: true
	});
});

gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});

gulp.task('json', function() {
	gulp.src(jsonSources)
	.pipe(connect.reload())
});


gulp.task('merge', function() {
	gutil.log('Merge GULP!');
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('client/development/js'))
		.pipe(connect.reload())
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'componente/sass',
			image: 'client/development/images',
			style: 'expanded'
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest('client/development/css'))
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('componente/sass/*.scss', ['compass']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsonSources, ['json']);
});


gulp.task('default', ['html', 'json', 'js', 'compass', 'connect', 'watch']);