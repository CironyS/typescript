//类(class)使用interface
interface UserInterface { name: string, age: number }

class User {
  _info: UserInterface
  constructor(user: UserInterface) {
    this._info = user
  }
  public get info(): UserInterface {
    return this._info
  }
}

let hd = new User({ name: '张三', age: 19 });
console.log(hd.info)