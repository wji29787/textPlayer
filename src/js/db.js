var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');
//检测连接状态
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(callback){
    //
});
//创建Schema 骨架 字段 
var loginSchema=new mongoose.Schema({
    username:String,
    password:String
});
//创建 connection  [name],[Schema],[name]:collection name
var login =db.model('login',loginSchema,'login');
var bolgListSchema=new mongoose.Schema({
    title:String,
    kind:String,
    id:String
});
var blogList=db.model('blogList',bolgListSchema,'blogList');
// var userl=new login({username:"Lear",password:"test"});
// userl.save(function(err){
//     if(err) return handleError(err); 
// });

// var query=login.find({username:"Lear"});
// query.then(function(doc){
//     console.log(doc);
// });

/**
 * 数据查询
 */
async function getBlogList(kind){
    let query ={};//查询条件，表示查询所有结果
    let results=[];
    if(kind !='/'){
        query={kind:kind};
    }
    results=await blogList.find(query);
    return results;
}
//查找ID最大值
async function queryMaxID(){
    let temp=0;
    await blogList.find({}).sort({'id':-1}).limit(1).then(function(doc){
        if(doc.length>0){
            temp=doc[0].id;
        }else{
            console.log("collection is empty");
        }
    });
    return temp;
}
//插入新数据
async function insertBlogList(title,kind){
    let value  = await queryMaxID();
    var record=new blogList({title:title,kind:kind,id:++value});
    record.save(function(err){
        if(err){console.log(err);return;}
        console.log("Insert Done");
    });
}

//删除和修改
function deleteBlogId(id){
    let query={id:id};
    console.log(query);
    blogList.remove(query).then(function(doc){
        console.log("done");
    });
}
function modefyBlogKind(id,kind){
    let query={id:id};
    blogList.findOneAndUpdate(query,{kind:kind}).then(function(doc){
        console.log("done");
    })
}

/**
 * 文件上传成功后写入数据库
 */
async function saveBlog(path,kind){
   var content=require("fs").readFileSync(path,{encoding:'utf-8'});
   var query= new blog({content:content,kind:kind});
   query.save(function(err){
       if(err) return;
       console.log("save done");
   });
}

//读取文章内容
async function readBlog(id){
    var result=await blog.find({id:id});
    return result[0];
}
