// const spawn=require('child_process').spawn;

// // const ls=spawn('ls',['-lh','usr']);
// const ls=spawn('powershell',['dir']);
// // console.log(ls);
// ls.stdout.on('data',data=>{
//     console.log("stdout:",data.toString());
// });
// ls.stderr.on("data",data=>{
//     console.log("stderr:",data.toString());
// });
// ls.on("close",code=>{
//     console.log("child_process exited with code",code);
// });
const http =require('http');
const cpus=require('os').cpus().length;
const cluster = require('cluster');
// if(cluster.isMaster){
//     console.log('Master process id is',process.pid);

//     for(let i=0;i<cpus;i++){
//         cluster.fork();
//     }
//     cluster.on('exit',(worker,code,signal)=>{
//         console.log('worker process died, id',worker.process.pid);
//     });
// }else{
//     http.createServer((req,res)=>{
//         res.writeHead(200);
//         res.end("hello world\n");

//     }).listen(8000);
//     console.log('worker started,process id',process.pid);
// }
// console.log(process.getuid());
console.log(process.argv);
console.log(process.cwd());
console.log(process.version);
console.log(process.pid);
// console.log(process.env);
process.on('beforeExit',()=>{
    setInterval(()=>{
        console.log("process will not exit");
    },1000);
});
// process.exit();
console.log(11);
  