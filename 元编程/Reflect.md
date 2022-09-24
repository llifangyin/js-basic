ES6新特性：
Reflect 反射
是一个内置对象，提供可拦截JavaScript操作的方法。
该方法和代理句柄类似，
。Reflect的原型就是Object.
reflect方法不是一个函数对象

Reflect.has(target,propertyKey) 作用与in 操作符相同

更好的apply函数
es5中 
通常使用Function.prototype.apply()方法调用要给具有给定this值和arguments数组的函数
// var a = Function.prototype.apply.call(Math.floor,undefined,[1.74])
// var b = Reflect.apply(Math.floor,undefined,[2.64])


检查属性定义是否成功：
Object.defineProperty,成功返回对象，失败返回TypeError，得使用try catch捕获定义属性时发生的任何错误

Reflect.definedProperty返回的是一个布尔值的成功状态
console.log(Reflect.defineProperty(c,'d',{value:3}))
console.log(Object.defineProperty(c,'e',{value:4}))



确保对象的属性能正确赋值，广义上讲，即确保对象的原生行为能够正常进行，这就是Reflect的作用

（1）Reflect.get(target,property,receiver)
（2）Reflect.set(target,propName,propValue,receiver)
（3）Reflect.set与Proxy.set联合使用,并且传入receiver，则会进行定义属性操作
（4）Reflect.has(obj,name)
（5）Reflect.deleteProperty(obj, name)
（6）Reflect.construct(target, args)
（7）Reflect.getPrototypeOf(obj)
（8）Reflect.setPrototypeOf(obj, newProto)
（9）Reflect.apply(func, thisArg, args)
（10）Reflect.defineProperty(target, propertyKey, attributes)
（11）Reflect.getOwnPropertyDescriptor(target, propertyKey)
（12）Reflect.isExtensible (target)
（13）Reflect.preventExtensions(target)
（14）Reflect.ownKeys (target)


总结：
1、将Object对象的一些明显属于语言内部的方法(比如Object.defineProperty)，放到Reflect对象上，那么以后我们就可以从Reflect对象上可以拿到语言内部的方法。
2、使用 Reflect.f 错误返回布尔值
使用Proxy和Reflect 实现观察者模式