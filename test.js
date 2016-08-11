var json = require('./package.json');
//var attrs = Object.keys(json.devDependencies);
//[ 'gulp', 'gulp-less', 'gulp-load-plugins' ]
var attrs = [1,2,3];
var result = attrs.reduce(function(curr,next){
    return curr+next;
},0);

console.log(result);

console.log('gulp-less'.startsWith('gulp-'));
console.log('gulp-less'.indexOf('gulp-')==0);