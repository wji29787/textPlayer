// var Iter={
//     [Symbol.iterator]:function(){
//         var i=0;
//         return {
//             next :function(){
//                 return ++i;
//             }
//         };
//     }
// };
// var obj=new Iter[Symbol.iterator]();
// var aa=obj.next();
// var bb=obj.next();
// console.log(aa,bb);
function myIter(array){
    this.array=array;
}
myIter.prototype[Symbol.iterator]=function(){
    let index=0;
    var next=()=>{
        if(index<this.array.length){
            return {
                value:this.array[index++],
                done:false
            };
        }else{
            return {value:undefined,done:true};
        }
    }
    return {next:next};
}
var myiter=new myIter(["a","b"]);
for(var i of myiter){
    console.log(i);
}

// var aa=myiter[Symbol.iterator]().next();
// var bb=myiter[Symbol.iterator]().next();
// console.log("aa",aa,"bb",bb);

class Person{
    //静态方法
    static getName(){
        return "lear";
    }
    constructor(sex,age){
        this.sex=sex;
        this.age=age;
    }
    getInfo(){
        return this.sex+','+this.age;
    }
}
// var person=new Person("fea","20");
// console.log(person.getInfo());
// console.log(Person.getName());
//继承类
class Student extends Person {

    static getName2(){
        return super.getName()+",hi";
    }
}
// console.log(Student.getName2());
var fs=require('fs');
var path=require('path');
function read(path,callback){
    fs.readFile(path,'utf-8',function(err,data){
        if(err) {
            throw err;
        }
       callback(data)
    });
}
// console.log(__dirname);
// console.log(path.join(__dirname,'./foo.txt'));
// console.log(fs);
// var ca=read(path.join(__dirname,'./demo2.js'),function(data){
//     console.log(data);
// });
// console.log(ca);
// console.log(process.cwd());

//异步调用
// 1 async.series  顺序执行
// function read_foo(callback){
//     fs.readFile("foo.txt",'utf-8',callback);
// }
// function read_bar(callback){
//     fs.readFile("bar.txt",'utf-8',callback);
// }
// function read_baz(callback){
//     fs.readFile("baz.txt",'utf-8',callback);
// }
// asnyc.series([read_foo,read_bar,read_baz],function(err,data){
//     console.log(data);//输出结果为顺序调用的结果数组
// });
//2 async.parallel 并行执行 输出结果为顺序调用的结果数组
//3 async.waterfall 同顺序执行，把结果传递给下一个调用
// function read_foo(callback){
//     fs.readFile("foo.txt",'utf-8',callback);
// }
// function read_bar(value,callback){
//     fs.readFile("bar.txt",'utf-8',callback);
// }
// function read_baz(value,callback){
//     fs.readFile("baz.txt",'utf-8',callback);
// }
// async.waterfall([read_foo,read_bar,read_baz],function(err,data){
//     console.log(data);  //
// });




