//剩余参数在TS中的使用
// function hd (...args:number[]) :number {
//   return args.reduce((s,n)=>s+=n,0)
// }
// console.log('hd',hd(1,2,3,4))
//============================================
function push(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    arr.push.apply(arr, args);
    return arr;
}
var hd = ['houdunren.com'];
console.log('push', push(hd, 1, '000', true));
