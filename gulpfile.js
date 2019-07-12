var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	connect = require('gulp-connect'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');

var coffeeSource = ['Componente/coffee/tagline.coffee'];
var jsSources = [
'Componente/scripts/rclick.js',
'Componente/scripts/pixgrid.js',
'Componente/scripts/tagline.js',
'Componente/scripts/template.js'
];

var sassSources = ['Componente/sass/style.scss'];


gulp.task('connect', function(){
	connect.server ({
		root: 'Client/development/',
		livereaload: true
	});
});

gulp.task('merge', function() {
	gutil.log('Merge GULP!');
});

gulp.task('coffee', function() {
	gulp.src(coffeeSource)
		.pipe(coffee({ bare: true }))
			.on('error', gutil.log)
		.pipe(gulp.dest('Componente/scripts'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('Client/development/js'))
		.pipe(connect.reload())
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'Componente/sass',
			image: 'Client/development/images',
			style: 'expanded'
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest('Client/development/css'))
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(coffeeSource, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('Componente/sass/*.scss', ['compass']);
});


gulp.task('default', ['coffee', 'js', 'compass', 'connect', 'watch']);