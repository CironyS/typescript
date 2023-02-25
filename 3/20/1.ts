// type与interface的差异对比
//interface接口继承
//可以使用extends继承
// interface Member {
//   name: string
// }

// interface User extends Member {
//   age: number
// }

// class Person implements User {
//   name: string = '张三'
//   age: number = 19
// }

// let hd = new Person()
// console.log('hd', hd)


//type继承
//使用&对属性进行合并
//使用|表示再声明变量时只需满足其中一个条件即可
// type Member = {
//   name: string
// }

// type User = {
//   age: number
// }

// type Person = Member & User

// type Person = Member | User


// const hd: Person = {
//   name: '张三',
//   age: 19
// }

// const hd: Person = {
//   name: '张三',
//   age: 19
// }

// console.log(hd);

//-------------------------------------
// type使用implements实现对属性的约束(继承)
// type Person = { name: string, age: number }

// class User implements Person {
//   name: string = "张三"
//   age: number = 19
// }

// console.log(new User());

//-----------------------------------------
// 使用type与interface进行组合式约束(继承)
interface User {
  name: string
}

type Member = {
  age: number
}

type Person = User & Member

class Hd implements Person {
  name: string = '张三'
  age: number = 18
}

console.log(new Hd())