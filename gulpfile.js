var gulp = require('gulp');
var util = require('util');
//把src下面的所有的文件都拷贝到build目录下
gulp.task('default',function() {
    //生成的目录=dest目录+通配符开始匹配的目录
    // base 是指定基准目录
    //如果指定的base
    //生成的目录=dest目录+(源文件的完整目录-base路径)
    gulp.src(['./src/html/*.html','./src/javascript/*.js'],{base:'./src'})
        .pipe(gulp.dest('./build'));
});
/*gulp.task('copy-imgs',function() {
    gulp.src('./src/imgs/!*.@(jpg|png)').pipe(gulp.dest('./build'))
});*/
gulp.task('copy-imgs',function() {
    gulp.src('./src/imgs/*.{jpg,png}').pipe(gulp.dest('./build'))
});