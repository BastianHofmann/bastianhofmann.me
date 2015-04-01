var gulp = require('gulp'),
		less = require('gulp-less'),
		livereload = require('gulp-livereload'),
		concat = require('gulp-concat');

gulp.task('less', function() {
  gulp.src('assets/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

gulp.task('reload', function() {
  gulp.src('public/*.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('assets/**/*.less', ['less']);
	gulp.watch('public/*.html', ['reload']);
});
