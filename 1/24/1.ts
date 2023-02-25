//剩余参数在TS中的使用

// function hd (...args:number[]) :number {
//   return args.reduce((s,n)=>s+=n,0)
// }

// console.log('hd',hd(1,2,3,4))

//============================================

function push(arr:any[],...args:any[]) : any{
  arr.push(...args);
  return arr;
}

let hd = ['houdunren.com']

console.log('push',push(hd,1,'000',true))