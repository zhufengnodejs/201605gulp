var gulp = {
    tasks: [],//存放所有任务的一个数组
    task: function (fn) {//定义一个任务，向数组中添加一个函数元素
        gulp.tasks.push(fn);
    },
    start: function () {//开始执行所有的任务
        var index = 0;//定义当前数组的索引,默认从0开始
        //每调用一次callback就相当于取出当前函数并执行
        function next() {
            //表示数组已经迭代完成可以结束了
            if (index >= gulp.tasks.length) {
                return;
            }
            //取出当前任务并执行
            var task = gulp.tasks[index++];
            //取得当前任务函数的形参个数
            var length = task.length;
            if(length>0){//如果是异步任务，接收next参数，则执行此函数的时候把next传进去
                task(next);
            }else{//如果是同步任务，不接收next参数，则执行此任务的时候不需要传next进去，执行任务完成后自已手工调用next
                task();
                next();
            }

        }

        next();
    }
}
gulp.task(function () {
    console.log(1);
});
gulp.task(function (next) {
    setTimeout(function () {
        console.log(2);
        next();
    }, 1000)
});
gulp.start();