'use strict';
const gulp = require('gulp');
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create();
const reload=browserSync.reload;
// var browserSync = require('browser-sync');
const path=require('path');
//获取当前时间 : 2018-06-08 17:59:34
let getTimeStr = ()=>{
    let date=new Date(),
        Y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(),
        H = date.getHours(), i = date.getMinutes(), s = date.getSeconds();   
    return Y + '-' + (m<10?'0'+m:m) + '-' + (d<10?'0'+d:d) + ' ' + (H<10?'0'+H:H) + ':' + (i<10?'0'+i:i) + ':' + (s<10?'0'+s:s);
    /* var t = Y + '-' + m + '-' + d; 年月日 */
}
var DIST="E:/apache/apache-tomcat-7.0.72-04/webapps/slwcms";
var serverPath="http://127.0.0.1:8084/slwcms/";
var basePath="./dist";
// var base=path.basename('sdd.tar.gz','.tar.gz');
// console.dir(path.delimiter);
// gulp.task('run',()=>{
//     // 
//     // gulp.watch('./*').on('change',function(){      
//     // })
//     gulp.src('./src/**')
//         .pipe(gulp.dest('./dist'));   
// });

gulp.task('srcTodest',()=>{
    return gulp.src('./src/**')
           .pipe(gulp.dest('./dist'));
});
gulp.task('browserStart',['srcTodest'],()=>{
    browserSync.init({
        port:3084,  
       //代理服务器地址 
    //    proxy: serverPath,
       ui:{
           port:3074
       },
       server:{
           baseDir:basePath,
           index:'index.html'
       } 
      });
});
gulp.task('watchs',()=>{
    // 
    // gulp.watch('./*').on('change',function(){      
    // })
    //  return gulp.src('./src/**')
    //     .pipe(watch('./src/**',(val)=>{
    //            console.log('base---------'+val.base,'\n name-----------'+val.name);
               
    //     }))
    //     .pipe(gulp.dest('./dist')); 
    var stream=watch('./src/**',(val)=>{
        console.log(getTimeStr()+"--------变化==> "+val.base);
     //    gulp.src('./src/**').pipe(gulp.dest('./dist'));
     })
     .pipe(gulp.dest('./dist'))
     .pipe(reload({stream:true})); 
    //  console.log(stream);
    return stream; 
  
});
// gulp.watch('./src/**',['run'],function(){
//     console.log('运行文件检测');
// })
//gulp.task('default',['run','watchJs']);
gulp.task('default',['srcTodest','browserStart','watchs']);
