//数组使用const断言

let a = "houdunren.com"
let b = 2020
// let arr = [a,b];
// let arr = [a,b] as const;
let arr = <const>[a,b];
let f1 = arr[1]
// f1 = false;
f1 = 2012;
console.log(f1);