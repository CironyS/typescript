//使用接口声明函数与接口声明合并
//使用接口对函数的约定
// interface pay{
//   (price:number):boolean
// }

// const WePay:Pay = (price:number) => true;

//-----------------------------------------------------
//接口合并:将重复写多个接口不会进行覆盖,会进行合并
interface AnimationsInterface {
  name: string
  move(): void
}

interface AnimationsInterface {
  end(): void
}

class Player implements AnimationsInterface {
  name = "张三"
  public move(): void {
    console.log(`${this.name}}移动`)
  }
  public end(): void {
    console.log(`游戏结束`)
  }
}

console.log(new Player());