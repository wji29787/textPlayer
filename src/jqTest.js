(function(window,undefined){
    "use strict";
    var arr=[];
    var document=window.document;
    var getProto=Object.getPrototypeOf;
    var slice=arr.slice;
    var concat=arr.concat;
    var push=arr.push;
    var indexOf=arr.indexOf;
    var class2type={};
    var toString=class2type.toString;
    var hasOwn=class2type.hasOwnProperty;
    var fnToString=hasOwn.toString;
    var ObjectFunctionString=fnToString.call(Object);
    var support={};
    var isFunction=function isFunction(obj){
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };
    var isWindow =function isWindow (obj){
        return obj !=null && obj === obj.window;
    };
    //类型判断
    function toType(obj){
        if( obj == null ){
            return obj +"";
        }
        return typeof obj === "object"|| typeof obj==="function" ?
               class2type[toString.call(obj)] || "object" : typeof obj; 
    }
    function isArrayLike(obj){
        var length = !!obj &&  "length" in obj && obj.length,type = toType(obj);

    }
    //构造jquery对象
    var jQ=(function(){
        var jQ=function(selector,context){
            return new jQ.fn.init(selector,context,rootjQ);
        };
        //一推局部变量生命
        jQ.fn=jQ.prototype={
            constructor:jQ,
            length:0,
            init:function(selector,context,rootjQ){

            },
            toArray:function(){
               return slice.call(this); 
            },
            get:function(num){
               if(num==null){
                  return slice.call(this);
               }
               return num < 0 ? this[num+this.length]:this[num]; 
            },
            pushStack:function(elems){
               var ret =jQ.merge(this.constructor(),elems);
               ret.prevObject=this;
               return ret;
            },
            //一堆原型和方法
            each:function(callback){
                return jQ.each(this,callback);
            },
            map:function (callback){
                return this.pushStack(jQ.map(this,function(elem,i){
                    return callback.call(elem,i,elem);
                }));
            },
            slice:function(){
                return this.pushStack(slice.apply(this,arguments));
            }   

        };
        jQ.fn.init.prototype=jQ.fn;
        jQ.extend=jQ.fn.extend=function(){
            var options,//指向某个源对象
                name,//表示某个源对象的某个属性名
                src,//表示目标对象的某个属性的原始值
                copy,//表示某个源对象的某个属性的值
                copyIsArray,//表示变量copy是否是数组
                clone,//表示深度复制时原始值的修正值
                target=arguments[0]||{},//指向目标对象
                i=1,//表示源对象的起始下标
                length=arguments.length,//表示参数的个数。用于修正变量target
                deep=false;//表示是否执行深度复制，默认false
                //修正目标对象target.源对象起始下标
                if(typeof target==="boolean"){
                    deep=target;
                    target=arguments[1]||{};
                    i=2;
                }
                if(typeof target !=="object" && !isFunction(target)){
                    target={};
                }
                if(length===i){
                    target=this;
                    --i;
                }
                for(;i<length;i++){
                    //遍历源对象的属性
                    if((options=arguments[i])!=null){
                        for(name in options){
                            src=target[name];
                            copy=options[name];
                            //如果复制值与目标对象target相等,为了避免深度便利时死循环，
                            //因此不会覆盖目标对象的同名属性。
                            if(target===copy){
                                continue;
                            }
                            //如果时深度合并，且复制值copy是普通对象或数组，则递归合并
                            if( deep&&copy&&(jQ.isPlainObject(copy)||(copyIsArray=jQ.isArray(copy)))){
                                if(copyIsArray){
                                    copyIsArray=false;
                                    //修正src并赋值给原始值副本clone.

                                    clone=src&&jQ.isArray(src)? src:[];
                                }else{
                                    // iQ.ISplainObject(copy)判断值copy 是否是“存粹”的javascript对象
                                    //，只有通过对象直接量{}new Object() 创建的对象，才会返回true.
                                    clone=src&&jQ.isPlainObject(src)?src:{};
                                }

                                target[name]=jQ.extend(deep,clone,copy);
                            }else if(copy!==undefined){
                                target[name]=copy;
                            }
                        }
                    }
                }

        };
        jQ.extend({
            //一堆属性和方法
            isPlainObject:function(obj){
                var proto,Ctor;
                if(!obj||toString.call(obj) !=="[object Object]"){
                    return false;
                }
                proto=getProto(obj);
                if(!proto){
                    return true;
                }
                Ctor=hsaOwn.call(proto,"constructor")&&proto.constructor;
                return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;
            }
        })
        return jQ;
    })();
    //省略其他代码
    console.log(jQ);
    window.jQ=window.$jQ=jQ;
})(window);