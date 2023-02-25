{
  class User<T> {
    constructor(private _user) {}
    public get(): T {
      return this._user;
    }
  }

  interface UserInterface {
    name: string;
    age: number;
  }

  let user = new User<UserInterface>({ name: "张三", age: 18 });
  console.log(user.get().age);
}
