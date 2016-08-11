var gulp = require('gulp');
var util = require('util');
//定义一个复制文件的任务
//把src/index.html拷贝到build目录下
gulp.task('default',function(){
    //src 获取指定文件的可读流
    // * 能匹配任意字符，除了路径分隔符

    // **如果不是单独出现的话不能匹配路径分隔符
    // ** 如果单独出现才能匹配路径分隔符
    // index.html html/base.html
    gulp.src('./src/**/*.html')//glob
        //dest的参数是一个目录名
        .pipe(gulp.dest('./build'));//通过管道的方式注入到可写流里面去
    //最后生成目录=dest的参数目录+源文件中通配符开始匹配的目录
});