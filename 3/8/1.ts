//单个实例:多次调用函数只创建一个实例
class Axios {
  protected static instance: Axios | null = null
  private constructor() { }
  public static make(): Axios {
    if (Axios.instance === null) {
      console.log('创建了Axios实例');
      Axios.instance = new Axios()
    }
    return Axios.instance
  }
}

let instance0 = Axios.make()
let instance1 = Axios.make()
let instance2 = Axios.make()
let instance3 = Axios.make()
let instance4 = Axios.make()
let instance5 = Axios.make()