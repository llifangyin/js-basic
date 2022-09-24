动态类型：
javascript 是一种弱类型语言，或者是动态语言。不用提前声明变量的类型，你可以使用同一个变量来保存不同类型的数据。

数据类型：
javascript中类型集合由 原始值 和 对象组成

原始值： 

boolean
null
undefined
number  标准的双精度64位二进制格式的值（-（2^53-1）~ 2^53-1 、 +ifinity -ifinity NAN）
string ： 16位的无符号整数值的'元素'，不同于其他语言（c），JavaScript的字符串一旦创建，不可修改

Biglnt类型  是一种基础的数值类型，可以表示任意精度的整数，使用它可以安全的存储和操作大整数，甚至可以超过数字类型的安全整数限制。BigInt 是通过在整数末尾附加字母 n 或调用构造函数来创建的

符号类型  Symbols 是唯一切不可修改的原始值，可以用来作为对象的键，

对象： 一些属性的集合

计算机科学中：对象Object指内存中的可以被标识符引用的一块区域
在JavaScript中可以看作一组属性的集合，通过对象字面量定义 {}
对象拥有两种属性：数据属性和访问器属性

数据属性:
特性（attributes）
value  writable enumerable(for in 可枚举) configurable(false 不可被删除)  Read-only DontEnum DontEelete 

访问器属性：
get set enumrable  configurable


标准的对象和函数：
一个javascript对象就是键和值之间的映射，
函数是一个可被调用功能的常规对象

Date JavaScript内置对象


有序集：数组和类型数组
数组：是一种使用整数作为键属性，并与长度属性关联的常规对象；
类型数组:es2015 内建对象，提供了一个基本的二进制数据缓冲区的类数组视图；

带键的集合：Maps Sets WeakMaps  WeakSets


JSON: javascript object notation   来源于JavaScript，同时也被其他语言使用。


使用typeof查看对象类型  

