var p = new Proxy({},{
    defineProperty(target,prop,descriptor){
        console.log(111)
        return Reflect.defineProperty(target,prop,descriptor)
    }
})
Object.defineProperty(p,'name',{
    value:'proxy',
    type:'custom'
})
// console.log(p);
var desc = {
    configurable:true,
    enumrable:true,
    value:10
}
Object.defineProperty(p,'a',desc)
console.log(p.name,p.a);