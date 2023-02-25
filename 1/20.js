// function sum (a:number,b:number){
//   return a*b;
// }
//可选类型添加?   默认是undefined
// function sum (a:number,b:number,ratio ? :number){
//   console.log('ratio',ratio)
//   return a*b;
// }
// function sum (a:number,b:number,ratio ? :number){
//   console.log('ratio',ratio)
//   ratio = ratio || 0.6;
//   console.log('ratio',ratio)
//   return a*b;
// }
//给函数设置默认值不能添加?
function sum(a, b, ratio) {
    if (ratio === void 0) { ratio = 0.6; }
    return (a + b) * ratio;
}
console.log('sum', sum(2, 3));
