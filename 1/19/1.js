//不进行赋值自己推断
// let hd = () =>{}
// // hd = "houdunren.com"
// // let a:string = hdx;
// let a:string = hd as unknown as string;
// console.log('a',a)
//明确类型进行赋值   使用Function
var func;
func = function () { return 'houdunren.com'; };
