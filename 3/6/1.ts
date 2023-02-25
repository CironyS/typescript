// class User {
//   public name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
// }

// let hd = new User('houdunren');
// console.log('hd', hd.name);

//在ts中是可以不用先写变量 直接在constructor中的参数添加修饰符比如说(public)
// class User {
//   public constructor(public name: string) {
//     this.name = name;
//   }
// }

// let hd = new User('houdunren');
// console.log('hd', hd.name);

//----------------------------------------------------
class User {
  public constructor(public name: string) {
    this.name = this.initName(name);
  }
  private initName(name: string): string {
    return `${name}-houdunren.com`
  }
}

let hd = new User('hd');
console.log('hd', hd.name);