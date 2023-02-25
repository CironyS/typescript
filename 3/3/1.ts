// class User {
//   protected name: string
//   public age: number
//   constructor(n: string, m: number) {
//     this.name = n;
//     this.age = m;
//   }
//   protected info() {
//     return `${this.name}的年龄是${this.age}`
//   }
//   public show(){
//     this.info()
//   }
// }
// let hd = new User('后盾人', 18);
// let xj = new User('向军', 19);

// console.log('hd',hd.info())
// console.log('hd',hd.show())

// console.log('xj',xj.info())
// console.log('xj',xj.show())


//-----------------------------------------------------------
class Users {
  protected name: string
  public age: number
  protected info() {
    return `${this.name}的年龄是${this.age}`
  }

}
class User extends Users {
  constructor(n: string, m: number) {
    super();
    this.name = n;
    this.age = m;
  }
  public show() {
    return this.info()
  }
}

let hd = new User('后盾人', 18);
let xj = new User('向军', 19);

// console.log('hd', hd.info())
// console.log('hd', hd.show())

// console.log('xj', xj.info())
console.log('xj', xj.show())