(function(root,factory){
    if(typeof define =='funciton' && define.amd){
        // AMD
        define(['jquery'],factory)
    }else if(typeof exports =='object'){
        modules.exports = factory[require('jquery')]
    }else{
        root.returnExports = factory(root.jQuery)
    }

})(this,function($){
    function myFun(){

    }
    return  myFun
})
// umd更像一个语法糖。UMD规范的js文件其实就是要给立即执行函数
// 函数有两个参数 第一个参数是当时运行环境
// 第二个参数是模块的定义体
// 在执行UMD规范时，优先判断环境是否支持AMD环境。然后检测是否
// 支持commonjs环境，否则会认为当前环境为浏览器环境（window)

