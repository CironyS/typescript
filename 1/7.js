// let hd = "houdunren.com";
// hd = "www.baidu.com";
// let xj = 100;
// xj = 200;
// let state = false;
// state = 2>1;
function sum1(a, b) {
    return "计算的结果是" + (a + b);
}
console.log(sum1(2, 4));
//在ts中,类型如果没有进行约束,那么ts根据后面赋值进行自动推断,给出相应约束
//如果后面没有进行相关赋值,那么变量默认是any类型
