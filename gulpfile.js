var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
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

gulp.task('merge', function() {
	gutil.log('Merge GULP!');
});

gulp.task('coffee', function() {
	gulp.src(coffeeSource)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
		.pipe(gulp.dest('Componente/scripts'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('Client/development/js'))
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
});

