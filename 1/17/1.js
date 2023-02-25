//void 可以赋值为undefined或者bull
// let hd:void = undefined;
// hd = null;
// console.log('hd',hd)
//void函数返回值的使用
// function sum() :void{
// }
// function sum() :void{
//   return null;
// }
// function sum() :void | string{
//   return '000000';
// }
// console.log('sum',sum())
//never  函数抛出异常或无限循环时返回值是
// function sum():never{
//   throw new Error('输入错误')
// }
// console.log('sum',sum())
