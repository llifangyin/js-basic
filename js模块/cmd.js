define(function(require,exports,module){
    var $ = require('jquery')
    function myFun(){}
    return myFun
})




// cmd规范倾向依赖就近。
define(function(require,exports,module){
    var a = require('./a')
    a.test()

    //...

    if(status){
        var b = require('./b')
        b.test()
    }
})

    