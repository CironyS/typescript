// class Users {
//   protected name: string
//   public age: number
//   private info() {
//     return `${this.name}的年龄是${this.age}`
//   }
//   protected getInfo() {
//     return this.info()
//   }

// }
// class User extends Users {
//   constructor(n: string, m: number) {
//     super();
//     this.name = n;
//     this.age = m;
//   }

//   public show() {
//     return this.getInfo()
//   }
// }

// let hd = new User('后盾人', 18);
// let xj = new User('向军', 19);

// console.log('hd', hd.show())

// console.log('xj', xj.show())

//---------------------------------------------------------------
// class Users {
//   protected name: string
//   public age: number
//   private info() {
//     return `${this.name}的年龄是${this.age}`
//   }
//   protected getInfo() {
//     return this.info()
//   }

// }
// class User extends Users {
//   constructor(n: string, m: number) {
//     super();
//     this.name = n;
//     this.age = m;
//   }

//   private getInfo() {
//     return '123'
//   }

//   public show() {
//     return this.getInfo()
//   }
// }

// let hd = new User('后盾人', 18);
// let xj = new User('向军', 19);

// console.log('hd', hd.show())

// console.log('xj', xj.show())
//---------------------------------------------------------------
class Users {
  protected name: string
  public age: number
  protected site: string = '后盾人网站'
  public info() {
    return `${this.name}的年龄是${this.age},Ta来自于${this.site}父类`
  }
  protected getInfo() {
    return this.info()
  }

}
class User extends Users {
  constructor(n: string, m: number) {
    super();
    this.name = n;
    this.age = m;
  }

  protected info() {
    return `${this.name}的年龄是${this.age},Ta来自于${this.site}子类`
  }

  public show() {
    return this.getInfo()
  }
}

let hd = new User('后盾人', 18);
let xj = new User('向军', 19);

console.log('hd', hd.show())

console.log('xj', xj.show())