//在默认情况下let声明变量为宽泛类型    let声明类型可以进行重复修改
//const声明变量为具体值     const声明类型不可以进行重复修改
// let a:string = "houdunren.com"
//
// // let b = "后盾人"
// let b:'后盾人' = "后盾人"
// b = '后盾人'
//
// const c = "houdunren.com"
// console.log(b);

//-----------------------------------------------
//使用as const可以将宽泛类型转换具体内形
// let a:string = "houdunren.com"
//
// let b = "后盾人" as const
//
// const c = "houdunren.com"
// console.log(c);

//----------------------------------------------
//注意;使用an const之后呢转换成不可修改的元组类型(readonly)
// let a:string = 'houdunren.com'
// // let b = 99
// let b = 99 as const
// // const arr = [a,b,'hdcms',100,false] as const
// const arr = [a,b,'hdcms',100,false]
// console.log(arr);


// ----------------------------------------------
// 对象也是如此
let a:string = 'houdunren.com'
let b = 99 as const
// let obj = {
//     name:'hdcms.com'
// } as const
// let obj = {
//     name:a
// } as const
let obj = {
    name:b
} as const
console.log(obj);