statement:
在计算机编程语言中，语句 是一行任务指令的代码。每个程序都包含若干语句。

如果一条语句独占一行的话，那么分号是可以省略的。（译者注：并不建议这么做。）但如果一行中有多条语句，那么这些语句必须以分号分开。

变量提升：
JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面
es6中，**let const 同样会被提升到代码块的顶部但是不会初始化赋值，所以引用这个变量，会抛出引用错误（Reference error),这个变量将从代码块一开始就处于‘暂时性死区’，知道被声明为止**

函数提升：
**对于函数来说，只有函数声明会被提升到顶部，函数表达式不会**；
<!-- 提升 -->
function foo() {
  console.log("bar");
}
<!-- 不提升 -->
var baz = function() {
  console.log("bar2");
};

基本类型： 7种
**Boolean null undefined string number bigInt（任意精度的整数）  symbol (代表)**


对象：object
 
**两个基本元素：objects functions**

数据类型的转换：
**JavaScript时一种动态类型语言，数据类型会再代码执行时自动转换。**


字面量Literals
函数字面量： []
布尔值字面量： true false

数字字面量：
整数字面量: 十进制 八进制0（0O,0o）开头 十六进制 0x 二进制 Ob

浮点：
指数 e E ，

对象字面量：{}

正则表达式 字面值： 
var re = /ab+c/

字符串字面量：
'' ""

模板字面量：
``