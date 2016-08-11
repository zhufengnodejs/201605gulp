var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
gulp.task('concat',function(){
    gulp.src(['./src/js/*.js','!./src/js/*.tmp.js'])
        .pipe($.concat('all.js'))
        .pipe(gulp.dest('./build/js'))
})
gulp.task('concatcss',function(){
    gulp.src(['./src/js/*.js','!./src/js/*.tmp.js'])
        .pipe($.concat('all.js'))
        .pipe(gulp.dest('./build/js'))
})