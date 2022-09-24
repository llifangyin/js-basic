let set1 = new Set()
set1.add(1)
set1.add('wqq')
set1.add(2)
// console.log(set1.has(1));
set1.delete(2)
// set1.add(1)
set1.add(5)
console.log(set1.size);
// for(let item of set1){console.log(item);}


let arr = Array.from(set1)
console.log(arr);
let arr2 = [...set1]
console.log(arr2);