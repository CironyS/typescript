//下面情况不进行严格断言出现无法调用情况
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b]
// }

// const [n, m] = hd()
// console.log('m', m(10, 90))

//进行严格断言1   (m as Function)(10, 20)
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b]
// }

// const [n, m] = hd()

// console.log((m as Function)(10, 20));

//-------------------------------------
//进行严格断言2   console.log((m as (x: number, y: number) => number)(10, 20))
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b]
// }

// const [n, m] = hd()
// console.log((m as (x: number, y: number) => number)(10, 20))

//-------------------------------------
//进行严格断言3   hd() as [string, Function]
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b]
// }

// const [n, m] = hd() as [string, Function]
// console.log('m', m(90, 080))

//-------------------------------------
//进行严格断言4   hd() as [string, (x: number, y: number) => number]
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b]
// }

// const [n, m] = hd() as [string, (x: number, y: number) => number]
// console.log('m', m(100, 900))

//-------------------------------------
//进行严格断言5   return [a, b] as [typeof a, typeof b]
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b] as [typeof a, typeof b]
// }

// const [n, m] = hd()
// console.log('m', m(-10, 90))

//-------------------------------------
//进行严格断言6   return [a, b] as const
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b] as const
// }

// const [n, m] = hd()
// console.log(m(90, 900));

//-------------------------------------
//不能进行严格断言   [...hd()] as const
// function hd() {
//   let a = "houdunren.com"
//   let b = (x: number, y: number) => {
//     return x + y;
//   }
//   return [a, b]
// }

// const [n, m] = [...hd()] as const
// console.log(m(90, 900));