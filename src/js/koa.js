const Koa=require('koa');
const app=new Koa();
const serve =require('koa-static');


// app.use(ctx=>{
//     ctx.body="hello world";
//     console.log(ctx.url,ctx.method);
// });
// app.listen(3000);
// console.log(process.cwd());
// app.use(async (ctx,next)=>{
//     await next();
//     console.log("im1");
// });
// app.use(async (ctx,next)=>{
//     process.nextTick(function(){
//         next();
//     console.log("im2");
//     });
    
        

// });
// app.listen(3000);



/**
 * koa 超时中间件
 */
// app.use(async (ctx,next)=>{
//     var tmr=null;
//     const timeout=5000;//设置超时时间
//     await Promise.race([new Promise(function(resolve,reject){
//         tmr =setTimeout(function(){
//             var e=new Error('Requset timeout');
//             e.status=408;
//             reject(e);
//         },timeout);
//     }),new Promise(function(resolve,reject){
//         //执行后面加载的中间件
//         (async function(){
//             await next();
//             clearTimeout(tmr);
//             resolve();
//         })();
//     })]);
// });



/**
 * 静态文件服务
 * 
 * 
 */
const path=require('path');
// console.log(__dirname);
// app.use(serve(path.join(__dirname,'../'),{extensions:['html']}));
// app.listen(3000);


/**
 * 路由服务
 */

 var bodyParser=require('koa-bodyParser');
const router=require('koa-router')();
app.use(bodyParser());
app.use(router.routes());
router.get('/',async (ctx,next)=>{
    ctx.response.body='<h1>Index</h1><form action="/login" method="post">'+
    '<p>Name:<input name="name"></p>'+
    '<p>Password:<input name="password" type="password"></p>'+
    '<p><input type="submit" value="submit"></p>'+
    '</form>';
});
router.post('/login',async (ctx,next)=>{
    let name=ctx.request.body.name||"",
       password=ctx.request.body.password||'';
    console.log(ctx.request.body);
    if(name==='koa'&&password==='123456'){
        ctx.body="success"
    }else{
        ctx.body="login error";
    }   
});
app.listen(3000);




/**\
 * 对文章的修改
 */
router.post("/delete/blog/:blogId",async (ctx,next)=>{
    //删除谋篇文章
    await next()
});

//修改
router.post("/modify/blog/:blogId/:kindName",async (ctx,next)=>{
    // 修改分类
    await next();
});


//打开blog 内容的路由设计
router.get("/blog/:blogId",async (ctx,next)=>{
    let blogId =ctx.params.blogId;
    let content =await dbAPI.readBlog(blogId);
    ctx.body=content;
    await next();
});