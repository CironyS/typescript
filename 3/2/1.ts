// hasOwnProperty表示是否有自己的属性。这个方法会查找一个对象是否有某个属性，但是不会去查找它的原型链。
class User {
  public name: string
  public age: number
  constructor(n: string, m: number) {
    this.name = n;
    this.age = m;
  }
  public info() {
    return `${this.name}的年龄是${this.age}`
  }
}
let hd = new User('后盾人', 18);
let xj = new User('向军', 29);
for (let key in xj) {
  if (xj.hasOwnProperty(key)) {
    console.log(xj[key])
  }
}
