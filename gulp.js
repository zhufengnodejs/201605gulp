var gulp = {
    tasks:[],//存放所有任务的一个数组
    task:function(fn){//定义一个任务
        gulp.tasks.push(fn);
    },
    start:function(){//开始执行所有的任务
        gulp.tasks.forEach(function(task){
            task();
        });
    }
}

gulp.task(function(){
    console.log(1);
});
gulp.task(function(){
    console.log(2);
});
gulp.start();