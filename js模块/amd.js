// define([
//     'jquery'
// ], function($) {
//     'use strict';
//     function myFun(){console.log(111);}
//     return myFun
// });
// amd讲究的是前置前行。 
define([
    'jquery',
    'undercore'
], function($, _) {
    function a(){console.log(111);} //private not returned
    function b(){console.log(111);} //public
    function c(){console.log(111);} //public
    return{
        b:b,
        c:c
    } 
});

define([xx,dd],function(x,d){})
// define 是AMD规范用来声明模块的接口，第一个参数表示当前模块的依赖，
// 第二个参数是回调函数，表示此模块的执行体。只有以来数组中的
// 所有依赖模块可用时，AMD模块加载器比如requirejs才会执行回调函数并返回该模块的回调接口
// 回调函数中参数的顺序与依赖数组的依赖顺序一致
// 可以将回调函数中的参数名改为任意想用的变量名

