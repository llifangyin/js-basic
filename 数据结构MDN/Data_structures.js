let foo = 45
console.log(foo,typeof(foo));
foo = 'est'
console.log(foo,typeof(foo));
foo = true
console.log(foo,typeof(foo));
let a = NaN
console.log(typeof(a));
let b = +Infinity
console.log(b,typeof(b));

console.log(Number.MAX_VALUE);


const x = BigInt(Number.MAX_SAFE_INTEGER)
console.log(x);
console.log(1n + x);

