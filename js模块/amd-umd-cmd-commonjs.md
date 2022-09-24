前端模块规范

浏览器端=> AMD异步模块规范  <=>RequireJs
浏览器端=> CMD普通模块规范  <=>SeaJS
Node端 <=> CommonJS 同步模块规范 
浏览器和Node兼容端 => UMD 通用模块规范

AMD： Asynchronous Module Definition, 一般应用在浏览器端   
它是依赖前置 (依赖必须一开始就写好)会先尽早地执行(依赖)模块 。换句话说，所有的require都被提前执行（require 可以是全局或局部 ）
定义 define函数  使用requirejs加载
<script data-main="./main.js" src="./require.js"></script>

CMD: Common Module Definition 通用加载模块。
在浏览器端，浏览器端异步加载Sea.js实现的就是CMD规范

AMD：依赖前置，预执行（异步加载：依赖先执行）。
CMD：依赖就近，懒（延迟）执行（运行到需加载，根据顺序执行）

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。



commonjs (CJS) 规范 由Node推广使用
一个单独文件就是一个而模块
每一个模块都是一个单独的作用域
commonjs 规范一般应用于服务端 => nodejs平台
commonjs 采用的是同步加载方式
得力于browserity工具，可以在浏览器端使用commonjs规范的js文件

输出模块变量的最好方法是使用    module.exports   对象。 node_modules

传统 CommonJS 模块在浏览器环境中无法正常加载。
解决思路之一是，开发一个服务器端组件，对模块代码作静态分析，将模块与它的依赖列表一起返回给浏览器端。
另一种解决思路是，用一套标准模板来封装模块定义
umd??

node两种模块化的关系的：CommonJS模块化规范是nodejs最开始使用的模块化规范，但是由于ES模块化规范的盛行使得nodejs不得不使用ES模块化规范。

node默认使用的是CommonJS模块化规范，可以通过package.json配置文件的type属性进行修改。
type有两个取值module和commonjs,默认使用的是commonjs。
module代表ES6规范
commonjs代表CommonJS规范

CommonJS使用的是 exports、module.exportsh和require
使用时记得设置： "type": "commonjs",
使用CommonJS规范，引入文件的路径名后的.js文件名后缀可以省略。
ES使用的是 export、export default 和 import
使用时记得设置： "type": "module",
使用ES6规范，引入文件的路径名后的.js文件名后缀不可以省略。



UMD： Universal Module Definition 通用模块规范
因为AMD Commonjs规范是两种不一致的规范，虽然他们的应用场景不太一致。但是仍希望有一种同一的规范来支持。


近年来，开始提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制

ESM: 见modules.md
现代浏览器可用
具有CJS的语法和amd的同步
得益于ES6的静态模块结构，可以进行Tree Shaking
允许Rollup这样的打包器，可以删除不必要的代码，加快加载
可以在html中使用

浏览器支持行 Chrome 61+ firefox 60+ edeg 11+