var stream=require("stream");
var fs=require("fs");
var http=require("http");
var path=require("path");
var util=require("util");
var Readable=require('stream').Readable;
// var src=path.join(__filename,"../test1.txt");
// console.log(src);
// var readStream=fs.createReadStream(src,"utf-8");
// console.log(readStream);
// readStream.pipe()
// readStream.on("data",(data)=>{
//     console.log(data);
// });
// readStream.on("close",()=>{
//     console.log("closed");
// });
// readStream.on("error",(er)=>{
//     console.log("error");
// });

// var server=http.createServer((req,res)=>{
//     var stream=fs.createReadStream(src,"utf-8").pipe(res);
//    // stream.pipe(res);
//     // var fileList=fs.readdirSync("./");
//     // res.writeHead(200,{})
//     //  readStream.pipe(res);
// }).listen(3000);


/**
 * 自定义stream
 * 
 */
// util.inherits(MyReadable,Readable);
// function MyReadable(array){
//     Readable.call(this,{objectMode:true});
//     this.array=array;    
// }
// MyReadable.prototype._read=function(){
//     if(this.array.length){
//         this.push(this.array.shift());
//     }else{
//         this.push(null);
//     }
// }
// const array=['a','b','c','df','e'];
// const read=new MyReadable(array);
// read.on('data',(data)=>{
//     console.log(data);
// });
// read.on('end',()=>{
//     console.log('end');
// });

/**
 * 多进程服务
 */

 