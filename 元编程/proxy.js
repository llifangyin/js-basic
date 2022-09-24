// const handler = {
//     get:function(obj,prop){
//         return prop in obj? obj[prop]:37
//     }
// }
// const p = new Proxy({},handler)
// p.a = 1
// p.b = undefined
// console.log(p.a,p.b) //1 undefined
// console.log('c' in p,p.c) // false 37


// 劫持属性？返回一个特定值



// 无操作转发代理
// let target = {}
// let p = new Proxy(target,{})

// p.a = 37
// console.log(target.a);//37

// 验证
// 通过代理，验证一个对象的传值



// let validator = {
//     set: function(obj, prop, value) {
//       if (prop === 'age') {
//         if (!Number.isInteger(value)) {
//           throw new TypeError('The age is not an integer');
//         }
//         if (value > 200) {
//           throw new RangeError('The age seems invalid');
//         }
//       }
//       // The default behavior to store the value
//       obj[prop] = value;
//       // 表示成功
//       return true;
//     }
//   };
//   let person = new Proxy({}, validator);
//   person.age = 100;
//   console.log(person.age);
//   // 100
//   try{

//   }catch(e){
//     console.log();
//   }
//   person.age = 'young';
  // 抛出异常: Uncaught TypeError: The age is not an integer
//   person.age = 300;
  // 抛出异常: Uncaught RangeError: The age seems invalid

//   扩展构造函数：
// 有点难？


// 操作DOM节点
// 也有点难

// 修正值以及附加属性
// 还有点难

// 一个完整的trap 列表示例
// 尝试代理化一个非原生对象
// docCookies

