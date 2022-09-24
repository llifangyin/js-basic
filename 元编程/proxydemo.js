// let handler = {
//     get:function(target,name){
//         // console.log(target,'target');//{a:1}
//         // console.log(name,'name');//a
//         return 'hello'
//     }
// }
// let p = new Proxy({},handler)
// p.a = 1
// console.log(p.a)//hello
// console.log(p.sayhei)//hello


// handler： 陷阱的占位符 捕捉器
let handler = {
    get:function(target,name){
        // console.log(target,'target');//{a:1}
        // console.log(name,'name');//a
        if(target.hasOwnProperty(name)){
            return target[name]
        }else{
            console.log('没有该属性');
            return
        }
    },
    set:function(target,name,value){
        //target , name ,value
        target[name] = '#'+value
        // console.log('set',a,b,c);
    },
    deleteProperty:function(target,name){
        console.log('delte:',name);
        delete target[name]
    },
    //废弃
    enumertate(target){
        // for in触发枚举
        console.log('enum=>');
        return ['a','b','c'][Symbol.iterator()]
    }
}
let p = new Proxy({},handler)
p.a = 1
p.abc = 2
p.c = 3
// delete p.a
// console.log(p.a)//1
// console.log(p.abc)//1
// console.log(p.sayhei)//undefined

for(let key in p){
    console.log(key,'key in p');
}