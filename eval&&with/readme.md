eval()
eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。

eval() 是全局对象的一个函数属性。

eval() 是一个危险的函数， 它使用与调用者相同的权限执行代码

eval() 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。

eval 替代方法：只需使用 window.Function。

Function  
每个 JavaScript 函数实际上都是一个 Function 对象

constructor语法

new Function(functionBody)
new Function(arg0, functionBody)
new Function(arg0, arg1, functionBody)
new Function(arg0, arg1, /* … ,*/ argN, functionBody)

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));






with 语句 扩展一个语句的作用域链。

with (expression) {
    statement
}
JavaScript 查找某个未使用命名空间的变量时，会通过作用域链来查找，作用域链是跟执行代码的 context 或者包含这个变量的函数有关。'with'语句将某个对象添加到作用域链的顶部，如果在 statement 中有某个未使用命名空间的变量，跟作用域链中的某个属性同名，则这个变量将指向这个属性值。如果沒有同名的属性，则将拋出ReferenceError异常。



不推荐使用with，在 ECMAScript 5 严格模式中该标签已被禁止。推荐的替代方案是声明一个临时变量来承载你所需要的属性。

利：with语句可以在不造成性能损失的情況下，减少变量的长度。弊：with语句使得程序在查找变量值时，都是先在指定的对象中查找。