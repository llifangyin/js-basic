// console.log(Reflect.has(Object,'assign'))//true
// console.log(Reflect.has(Array,'push'))//fasle 
// console.log('assign' in Object)//true
// console.log('push' in Array)//fasle 
// let o ={a:1}
// console.log(Reflect.has(o,'a')) //true


// var a = Function.prototype.apply.call(Math.floor,undefined,[1.74])
// console.log(a);

// var b = Reflect.apply(Math.floor,undefined,[2.64])
// console.log(b);

// Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);

// Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index;

// Reflect.apply(''.charAt, 'ponies', [3]);

var c = {a:1}

try{
    console.log(Reflect.defineProperty(c,'c',{value:2}))
}catch(err){
    console.log(err);
}
if(Reflect.defineProperty(c,'d',{value:3})){
    // success
}else{
    // error
}
console.log(Object.defineProperty(c,'e',{value:4}))
