const Koa=require('koa');
const app=new Koa();
const path=require('path');
const router=require('koa-router')();
app.use(router.routes());

const views= require('koa-views');
app.use(views(__dirname+"/static/html",{extension:'ejs'}));
router.get("/blogList",async (ctx,next)=>{
    //
    const results = await dbAPI.getBlogList('/');
    return ctx.render('blogList',{results:results});         
});
