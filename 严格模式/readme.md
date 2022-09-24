ECAMscript2015引入了 strict mode

'use strict' 开启严格模式，可以设置在代码颗粒度下

严格模式不允许

词法错误：syntaxError
1、八进制语法 var n = 023
2、width语句
3、delete删除变量名
4、使用eval或arguments作为变量名或函数名
5、使用未来保留字（implemnets interface let package private protected public staic yield作为变量名或函数名)
6、在语句块中使用函数声明
7、对象字面量中使用两个相同的属性名 {a:1,a:1};函数形参中使用两个相同的参数名

运行时错误：
给一个未声明的变量赋值
删除一个不可配置的属性 delete Object.prototype

词义差异
函数中的this指向undefined 
argumnets对象属性不与对应的形参实参变量同步更新
eval不会在地区的作用域中创建新的变量。

如何保持中立：
eval  arguments  this