var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
gulp.task('js',function(){
    gulp.src(['./src/js/*.js','!./src/js/*.tmp.js'])
        .pipe($.concat('all.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe($.uglify())
        .pipe($.rename('all.min.js'))
        .pipe(gulp.dest('./build/js'))
})

gulp.task('css',function(){
    gulp.src(['./src/css/*.css'])
        .pipe($.concat('all.css'))
        .pipe(gulp.dest('./build/css'))
})