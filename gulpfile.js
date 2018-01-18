const gulp = require('gulp');
const clean = require('gulp-clean');
const usemin = require('gulp-usemin');
const concat = require('gulp-concat');
const babili = require('gulp-babili');
const cssmin = require('gulp-cssmin');

gulp.task('copy', ['clean'], function () {
    gulp.src('src/**/*').pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist').pipe(clean());
});

gulp.task('build', ['copy'], function () {
    gulp.src('dist/**/*.html')
        .pipe(usemin({
            css: [cssmin],
            js: [babili()]
        }))
        .pipe(gulp.dest('dist'));
});
