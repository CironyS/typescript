{
  class User {
    name: string
    age: number
    constructor(n: string, m: number) {
      this.name = n;
      this.age = m;
    }
    info() {
      return `${this.name}的年龄是${this.age}`
    }
  }
  let hd = new User('后盾人', 18);
  let xj = new User('向军', 19);
  let Users: User[] = []
  Users.push(hd, xj);
  console.log(Users);
}
