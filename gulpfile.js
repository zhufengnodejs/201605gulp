var gulp = require('gulp');
/**
 * 1. 安装相对应的插件
 * 2. 引入此插件
 * 3. 使用此插件
 */
var less = require('gulp-less');
gulp.task('less',function(){
    //通过src 获取所有的less文件
    gulp.src('./src/less/**/*.less')
        .pipe(less())//交由less插件进行编译处理
        .pipe(gulp.dest('build/css'))//最后输出到css目录中
});