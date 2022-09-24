let Obj = {
    a:1,
    b:2,
    c:'we',
    displayName:function(){
        console.log(this.c)
    }
}
// console.log(Object.getOwnPropertyNames(obj))

function Car(make,model,year,owner){
    this.make = make
    this.model = model
    this.year = year
    this.owner = owner
} 
function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
}
var kand = new Person('kand',20,'female')
var mycar = new Car('Mazda','miata',1990,kand)
Car.prototype.color = 'red'
// console.log(mycar.color);

// var obj1 = Object.create(Obj)
// obj1.displayName()

// 添加getter setter
// 1、使用对象初始化器
// 只需要在 getter 方法前加 get，在 setter 方法前加 set
// var o= {
//     a:7,
//     get b(){return this.a},
//     set c(x){ this.a  = x}
// }

// Object.defineProperties(obj,xxx)
var o1 = {a:0}
Object.defineProperties(o1,{
    'b':{get:function(){return this.a + 1}},
    'c':{set:function(x){this.a = x}}
})
o1.c = 10
console.log(o1.b);

var myobj = new Object()
myobj.a = 1
myobj.b =2
delete myobj.a
console.log(myobj);

g = 17
console.log(g);
delete g
// console.log(g); //undefined

var test1 = {name:1}
var test2 = {name:1}
console.log(test1==test2,test1===test2);//false