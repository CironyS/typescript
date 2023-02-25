// function sum(a:number,b:number){
//   return a*b;
// }
// let a:string = sum(2,3) as unknown as string
// console.log('a',a)

// function sum(a:number,b:number) :string {
//   return `结果是${a*b}`;
// }
// let a:string = sum(2,3)
// console.log('a',a)

//函数如果没有默认返回值约束的话也没有返回值就会是void
// function sum(){
//   console.log('sum',sum)
// }

// function sum(): void{
//   console.log('sum',sum)
// }

//使用箭头函数
// let sum = (a:number,b:number) => {
//   return a*b;
// }
// let a:string = sum(2,3) as unknown as string
// console.log('a',a)

// let sum = (a:number,b:number) :string => {
//   return `结果是${a*b}`;
// }
// let a:string = sum(2,3)
// console.log('a',a)

let sum = (): void =>
  console.log('sum')

sum()