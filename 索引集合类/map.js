// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// // var roots = numbers.map((i)=>{
// //    return  Math.sqrt(i)
// // });
// console.log(roots);


// var map = Array.prototype.map
// var a = map.call("Hello World", function(x) {
//   return x.charCodeAt(0);
// })
// console.log(a);

// parseInt 经常被带着一个参数使用，但是这里接受两个。第一个参数是一个表达式而第二个是 callback function 的基
// Array.prototype.map 传递 3 个参数：
// the element
// the index
// the array
// console.log(
// ["1", "2", "3"].map(parseInt)
// )
// [ 1, NaN, NaN ]