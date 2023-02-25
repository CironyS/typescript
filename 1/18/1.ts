// let hd:undefined = undefined;
// let xj:null = null;
// console.log('hd',hd)
// console.log('xj',xj)

// function get() :null | string{
//   // return null
//   return 'null123'

// }

// function get() :void | string | boolean{
//   // return null
//   // return undefined
//   // return 'null123'
//   return true

// }
// console.log('get',get())

//默认情况下null雨undefined可以变为其他类型的值
//严格模式禁止这种转换 打开"strictNullChecks": true,  即可
let str : string = '111111'
str = null
str = undefined
console.log('str',str)