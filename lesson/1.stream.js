var fs =require('fs');
//创建一个可读流
var rs = fs.createReadStream('../LICENSE');
rs.on('data',function(data){
    console.log(data);
})
rs.on('end',function(){
    console.log('读取完毕');
})