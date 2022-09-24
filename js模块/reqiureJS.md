// IE 6+ .......... compatible ✔
// Firefox 2+ ..... compatible ✔
// Safari 3.2+ .... compatible ✔
// Chrome 3+ ...... compatible ✔
// Opera 10+ ...... compatible ✔

<!-- 基于amd -->

RequireJS和Sea.js的共同点：

RequireJS 和 Sea.js 都是模块加载器

定位有差异。RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。Sea.js 则专注于 Web 浏览器端，同时通过 Node 扩展的方式可以很方便跑在 Node 环境中。


遵循的规范不同。

RequireJS 遵循 AMD（异步模块定义）规范，
Sea.js 遵循 CMD （通用模块定义）规范

