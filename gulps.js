var gulp = {
    tasks:[],//存放所有任务的一个数组
    task:function(fn){//定义一个任务
        gulp.tasks.push(fn);
    },
    start:function(){//开始执行所有的任务
        var index = 0;
        //每调用一次callback就相当于取出当前函数并执行
        function next(){
            if(index >= gulp.tasks.length){
                return;
            }
            var task = gulp.tasks[index++];//取出当前任务
            task(next);
        }
        next();
    }
}
gulp.task(function(next){
    setTimeout(function(){
        console.log(1);
        next();
    },1000)
});
gulp.task(function(next){
    setTimeout(function(){
        console.log(2);
        next();
    },1000)
});
gulp.start();