var myIterable = {
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
    }
}
// var yourIterable = {
//     [Symbol.iterator]:function*(){
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }

for(let value of myIterable){
    console.log(value);//1,2,3
}

[...myIterable] //,\[1,2,3]


// function* gen(){
//     yield*[1,2,3]
// }
// gen().next()