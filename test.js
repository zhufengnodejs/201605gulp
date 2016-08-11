 var str = 'minify-css';
 str = str.replace(/-(\w)/,function(matched,group1){
     return group1.toUpperCase();
 })
 console.log(str);