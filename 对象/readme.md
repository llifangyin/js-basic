对象有时又被叫做关联数组。Object[propertyName] =xxx

枚举一个对象的所有属性
for in  返回一个对象及其原型链中的可枚举属性 windows 232
object.keys 返回对象自身的（不包括原型）的可枚举的所有属性 window 227
object.getOwnPropertyNames 返回对象自身的所有属性（不包括原型中）的名称的数组  window 1082


新建对象：
1、对象初始化器 {}
2、构造函数
3、Object.create()


继承：
所有的JavaScript对象至少继承一个对象。被继承的对象被称作原型，并且继承的属性可以通过构造函数的propertype对象找到。
=>继承与原型链

为对象类型定义属性：
用prototype(原型)

javascript的this关键字，在方法中使用表示当前对象
总结来说，this再一个方法中指调用的对象

ep:form元素中this指的是父窗体myform   <form name="myForm">


getter 和 setter

删除属性：
可以用delete操作符删除一个不是继承而来的属性


比较对象：
JavaScript中 objcts是一种引用类型，两个独立的声明的对象永远也不会相等，即使有相同的属性，只有再比较对象的引用时才会返回true
