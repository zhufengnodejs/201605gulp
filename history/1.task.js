/**
 * 什么时候全局安装
 *   当你需要在CMD中执行这个命令的时候需要全局安装
 *   1. 因为全局安装会把这个模块装到全局目录下面
 *   2. 因为这个全局被配置到环境变量中的path中去了
 *   3  在命令行中执行命令的时候，会去path中指定的目录中
 *   找这个可执行文件，安装了就能找到，不安装就找不到
 *   4. 在命令行中执行此命令的时候，找到命令就执行，找不到就报错。
 *   5.全局安装后在整个电脑中所有的目录下都可以执行此命令
 *
 * 什么时候本地安装
 *   1. 如果你需要在你的项目中使用(require)此模块的话，需要本地安装
 *
 */
    //写gulp就是用node.js编写gulpfile文件
var gulp = require('gulp');
//使用task方法可以定义一个任务
//第一个参数是任务的名称，可以随意起
//第二个参数是任务的定义，是一个函数
gulp.task('hello',function(){
    console.log('hello');
});
/**
 * 1. 执行gulp任务的时候，默认会在当前目录下找gulpfile.js文件
 * 2. --gulpfile 可以指定其它 文件名
 * gulp hello --gulpfile gulpfiles.js
 * 3. --cwd 可以指定当前工作目录，gulp会在此目录下寻找gulpfile.js文件
 * gulp hello --cwd ./history
 **/