es2015有四种相等算法：

抽象（非严格）相等比较 ==
严格相等比较 ===
同值零 +0 === -0
同值 Object.js(a,b)

JavaScript 提供三种不同的值比较操作：
== === Object.is

===：
NAN 和任何值不等
Object.js(NaN,NaN)//true