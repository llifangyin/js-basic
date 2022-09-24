Array.prototype.map()
**map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。**
``js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
``



类数组对象
一些 JavaScript 对象，例如 document.getElementsByTagName() 返回的**NodeList** 或者函数内部可用的 **arguments** 对象，他们表面上看起来，外观和行为像数组，但是不共享他们所有的方法。例如 arguments 对象就提供一个 length 属性，但是不实现 forEach() 方法。

Array.prototype.forEach.call(arguments, function(item) {
console.log(item);
});



**类型化数组： typed arrays**
JavaScript typed arrays 是类数组对象（array-like object），其提供访问**原始二进制数据的机制**。

javaScript 引擎执行优化使得这些数组访问速度快速。 随着 Web 应用程序变得越来越强大，添加音频和视频处理等功能、可以使用 WebSockets 、使用原始数据， 这都需要访问原始的二进制数据，所以专门的优化将有助于 JavaScript 代码能够快速和容易地操纵原始二进制数据类型的数组。
