module.exports = function(){
    /**
     * 1.初始化一个空对象$
     * 2. 读取package.json文件，得到一个json, require('./package.json');
     * 3. 取得devDependencies属性对象
     * 4.寻找此属性对象以gulp-开头的属性
     * 5. 加载这些gulp插件模块，把返回值赋给$对象,属性名就是插件名减去gulp-
     */
    //[ 'gulp', 'gulp-less', 'gulp-load-plugins' ]
    return Object.keys(require('./package.json').devDependencies)
        .reduce(function($,key){// $代表当前对象 key代表每个gulp插件模块的名字
            if(key.startsWith('gulp-')&& key != "gulp-load-plugins"){
                var attr = key.slice(5);
                // less concat minify-css=> minifyCss
                attr = attr.replace(/-(\w)/,function(matched,group1){
                    return group1.toUpperCase();
                })
                $[attr] = require(key);
            }

            return $;
        },{});
    // {less:less插件,sass:sass插件}
   //最后返回$,是一个对象，它把所有的插件返回值都挂到了它的属性上
}