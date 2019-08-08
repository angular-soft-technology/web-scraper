var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
	connect = require('gulp-connect'),
	compass = require('gulp-compass'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyHTML = require('gulp-minify-html'),
	jsonMinify = require('gulp-jsonminify'),
	imgMin = require('gulp-imagemin'),
	pngCrush = require ('imagemin-pngcrush'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync').create();
global.jQuery = require("jquery");

var env,
	jsSources,
	htmlSources,
	jsonSources,
	outputDir,
	sassStyle;


env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	outputDir = 'client/development/';
	sassStyle = 'expanded';
} else {
	outputDir = 'client/production/';
	sassStyle = 'compressed';
}



jsSources = ['componente/scripts/*.js'];

sassSources = ['componente/sass/style.scss'];
htmlSources = [outputDir + '*.html'];
jsonSources = [outputDir + '*.json'];

gulp.task('js', function() {
	 externals: {
  jquery: 'jQuery'
}
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulpif(env==='production', uglify()))
		.pipe(gulp.dest(outputDir + 'js'))
		.pipe(connect.reload())
		.pipe(browserSync.stream())
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'componente/sass',
			image: outputDir + 'images',
			style: sassStyle
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest(outputDir + 'css'))
		.pipe(connect.reload())
		.pipe(browserSync.stream())
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('componente/sass/*.scss', ['compass']);
	gulp.watch('client/development/*.html', ['html']);
	gulp.watch('client/development/js/*.html', ['json']);
	gulp.watch('client/development/images/**/*.*', ['images']);
});


gulp.task('connect', function(){
	connect.server ({
		root: outputDir,
		livereaload: true
	});
});

gulp.task('html', function() {
	gulp.src('client/development/*.html')
	.pipe(gulpif(env==='production', minifyHTML()))
	.pipe(gulpif(env==='production', gulp.dest(outputDir)))
	.pipe(connect.reload())
	.pipe(browserSync.stream())
});


gulp.task('images', function () {
	gulp.src('client/development/images/**/*.*')
	.pipe(gulpif(env==='production', imgMin({
		progressive: true,
		svgoPlugins: [{ removeViewBox: false}],
		use: [pngCrush]
	})))
	.pipe(gulpif(env==='production', gulp.dest(outputDir + 'images')))
	.pipe(connect.reload())
	.pipe(browserSync.stream())
})


gulp.task('json', function() {
	gulp.src('client/development/js/*.json')
	.pipe(gulpif(env==='production', jsonMinify()))
	.pipe(gulpif(env==='production', gulp.dest('client/production/js')))
	.pipe(connect.reload())
	.pipe(browserSync.stream())
});

gulp.task('serve', ['compass'], function(){
	browserSync.init({
		proxy: "localhost:8080"
	});

	gulp.watch('componente/sass/*.scss', ['compass']);
})


gulp.task('default', ['serve', 'html', 'json', 'js', 'compass', 'connect', 'images', 'watch']);