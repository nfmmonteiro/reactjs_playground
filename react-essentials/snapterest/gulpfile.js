var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var assign = require('lodash.assign');

var browserifyOptions = {
		entries: ['./source/app.js', './source/HelloWorld.jsx'],
		debug: true
	},
	bundler;

function bundle() {
	return bundler.bundle()
    	.pipe(source('app.js'))
    	.pipe(gulp.dest('./build'));
}

function setBundler(watch) {
	if (watch) {
		browserifyOptions = assign({}, watchify.args, browserifyOptions);
		bundler = watchify(browserify(browserifyOptions));
		bundler.on('update', bundle);
	} else {
		bundler = browserify(browserifyOptions);
	}
	bundler.on('log', gutil.log);
	bundler.transform(reactify);
}

gulp.task('default', function() {
	setBundler(true);
	return bundle();
});

gulp.task('build', function() {
	setBundler(false);
	return bundle();
});
