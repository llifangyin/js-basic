流程控制与错误处理：

在JavaScript种 任何表达式expression都可以看作一条语句 statement

语句块：由一对大括号界定
{
    statement1;
    statement2;
    ...
}
es6之前没有块作用域，


条件判断语句：
if(){}else{}

switch语句
switch(expression){
    case label1;
    statement1
    break;
    ...
    default:
    statementdef
    break
}

异常处理：

throw expression

try{}catch{}finally{}


**Error对象***
**name message属性**
catch(e){
    console.log(e.name)
    console.log(e.message)
}


