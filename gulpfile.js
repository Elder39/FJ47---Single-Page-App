const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('copy', ['clean'], function () {
    gulp.src('src/**/**').pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist').pipe(clean());
});

