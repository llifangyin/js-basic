let arr = [3, 5, 7];
arr.foo = "hello";

// Object.keys(arr) // (4) ['0', '1', '2', 'foo']
// 循环可枚举属性：
for(let i in arr){
    console.log(i);
}
// 0
// VM674:7 1
// VM674:7 2
// VM674:7 foo
console.log('===');

// 循环可迭代对象
for(let i of arr){
    console.log(i);
}
// 3
// VM678:3 5
// VM678:3 7
// undefined