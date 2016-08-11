var gulp = require('gulp');
gulp.task('one',function(){
    console.log('one');
});
gulp.task('two',function(){
    console.log('two');
});
gulp.task('default',function(){
    //gulp.watch('./src/index.html',['one','two'])
    //可以监控到被删除或修改的文件，但的确监控不到新增加的文件
    gulp.watch('./src/*',function(event){
        //type 变化的类型 changed(修改变化) deleted(删除)
        //path 修改的文件的路径
        console.log(event);
    })
});
