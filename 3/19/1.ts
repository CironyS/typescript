//type 基本类型的别名 联合类型

// interface User {
//   name: string,
//   age: number,
//   show: () => string
// }

// let hd: User = {
//   name: '张三',
//   age: 18,
//   show: () => `${hd.name}的年龄是${hd.age}`
// }

// console.log(hd.show());

//--------------------------------------------------------
// 基本类型的别名
// 使用type关键字时使用 = 号,而interface则不需要
type IsAdmin = boolean
// 联合类型
type Sex = 'boy' | 'girl'

type User = {
  name: string,
  age: number,
  isAdmin: IsAdmin,
  sex: Sex,
  show: () => string
}

let hd: User = {
  name: '张三',
  age: 18,
  isAdmin: false,
  sex: 'girl',
  show: () => `${hd.name}的年龄是${hd.age}`
}

console.log(hd.isAdmin)
console.log(hd.sex)
