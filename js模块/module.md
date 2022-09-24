背景：

提供一种将JavaScript程序拆分为可按需导入的单独模块的机制。
nodejs已经提供这个能力很长时间了，还有很多库和框架已经开始了模块的使用。例如，commonjs,和基于AMD的其他模块系统（requirejs），以及最新的webpack,和babel.
最新的浏览器开始原生支持模块功能了。

<!-- basic-modues demo -->
.mjs 使用MIME-type 为javascript/esm来导入文件（其他的JavaScript兼容MIME-type像application/javascript 也可以），它避免了严格的MIME类型检查错误，像The server responded width a non-Javascript MIME type'。除此之外，.mjs扩展名很明了，还能和其他工具互相适用。
typescript不支持.mjs
<script type ='module'>属性指示引入的模块



导出模块的功能：
export放最外层，
export let name ='test'
export fucntion test(){}
export {name,test1,test2}

导入功能：
import {name,test1,..} from 'x.js'


应用模块：
<script type='module' src='' />
加载本地模块会遇到CORS错误，需要服务器环境的模块才可被引入。
加载模块脚本时，不需要使用defer属性，模块会自动延迟加载。
模块功能只能在导入的脚本文件中使用。无法全局获得

默认导出：
export default xxx
export default function(){}
export {test as test1, test2 as test333} 
import {xx as xxx} from ''

模块对象：
import * as module form 'xxx' 

合并模块：

分别导出>
export * from 'xx'
export {test} from 'xx'
// 可以导出模块，从其他的模块中读取然后导出
export {xx} form 'otherjs'


动态加载模块：
import() 返回一个promise
import('xx').then(module=>{xxx})

// 比如出发点击事件时，加载模块，调用方法
el.addEventListener('click',()=>{import(xxx).then((modules)=>modules(xxx))})