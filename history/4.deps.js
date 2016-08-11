var gulp = require('gulp');
//当一个任务依赖的任务是异步的时候，那么当前任务并不会等待异步任务完成
gulp.task('买米',function(callback){
    setTimeout(function(){
        console.log('买米');
        //如果调了callback就表示此异步执行完毕，
        //如果不调callback就表示此异步一直没有结束，后续任务无法得到执行
        callback();
    },2000)
});
gulp.task('买菜',function(callback){
    setTimeout(function(){
        console.log('买菜');
        callback();
    },4000)
});

gulp.task('做饭',['买米','买菜'],function(){
    console.log('做饭');
});
//如果执行任务的时候不加任务名，gulp会自动寻找名字叫default的任务
gulp.task('吃饭',['做饭'],function(){
    console.log('吃饭');
});