//接口来约束对象
// interface User {
//   name: string,
//   age: number,
//   info(): string
// }

// let hd: User = {
//   name: '张三',
//   age: 18,
//   info() {
//     return `${this.name}-${this.age}`
//   }
// }

// console.log(hd.info());

//---------------------------------------------

interface User {
  name: string,
  age?: number,
  info?(): string,
  [key: string]: any
}

let hd: User = {
  name: '张三',
  sex: '女'
  // age: 18,
  // info() {
  //   return `${this.name}-${this.age}`
  // }
}

console.log(hd);
console.log(hd.sex);