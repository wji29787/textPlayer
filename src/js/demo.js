var http =require('http');
var fs=require('fs'); 
var url=require('url');
// fs.readFile("./src/index.html",(err,data)=>{
//     //console.log(__dirname);
//     console.log("err=========>"+err);
//     console.log("data========>"+data);
// });
var server =http.createServer(function(req,res){
    // console.log(req.url);
    // console.log(res);
    if(req.url=="/"){
        var fileList=fs.readdirSync('./');
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end(fileList.toString());
    }else if(req.url=="/src/index.html"){
        var path=req.url;
        console.log(path,req.method);
        fs.readFile("."+path,function(err,data){
            if(err){
                res.end("internal Error")
                throw err;
            }
            res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
            res.end(data);
        })
    }else if(req.url='/upload'){
       if(req.method==="POST"){
        var data=[];
        req.on('data',(chunk)=>{
            data.push(chunk);
        });
        req.on('end',()=>{
            var buf=Buffer.concat(data);
            console.log(11);
            var data1=buf.toString();
            var arr=data1.split('\r\n');
            console.log(arr);
            console.log(12);

        });
        var json={'hah':'finished'};
        res.writeHead(200,{'Content-type':'application/json;charset="utf-8"'});
        res.end(JSON.stringify(json));
       }
    };


     
    // console.log(req.headers);
    // res.writeHead(200,{"Content-type":"text/plain"});
    // res.end("sss");
})
.on("connection",function(req,res){
  //console.log("connection"); 
})
.on("request",(req,res)=>{
   // console.log("request");
})
.listen(3000,()=>{
    console.log("serverRun");
});
process.on("uncaughtException",function(){
    console.log("got error");
});

//console.log(JSON.stringify(http));
//console.log(server);
//var isWindows=require('is-windows');
//console.log(process.env);

// var server=http.createServer((req,res)=>{
//     var url=req.url.substring(1,req.url.length);

// })
// .listen(8080)