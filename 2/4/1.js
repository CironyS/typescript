//数组使用const断言
var a = "houdunren.com";
var b = 2020;
// let arr = [a,b];
// let arr = [a,b] as const;
var arr = [a, b];
var f1 = arr[1];
// f1 = false;
f1 = 2012;
console.log(f1);
