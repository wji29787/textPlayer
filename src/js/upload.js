const formidable=require('formidable');
const fs = require('fs');
function dealUpload(ctx){
    var form=new formidable.IncomingForm();//创建formidable.IncomingForm对象
    form.keepExtensions=true;//保持原有的扩展名
    form.uploadDir=__dirname+"static/html";
    form.parse(ctx.req,function(err,fields,files){
       if(err) {throw err; return;}
       fs.renameSync(fields.file.path,form.uploadDir+files.file.name);
       //更新博客列表
       dbAPI.insertBlogList(files.file.name,fields.kind);
       dbAPI.saveBlog(__dirname+"/static/blogs"+files.file.name,fields.kind);
    });
}
module.exports=dealUpload;
