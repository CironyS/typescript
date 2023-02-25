//接口使用方法:使用interface关键字进行定义  使用implements进行继承

interface AnimationsInterface {
  name: string
  move(): void
}

abstract class Animations {

  protected getPod(): { x: number, y: number } {
    return { x: 300, y: 500 }
  }
}

class Tank extends Animations implements AnimationsInterface {
  name = "我方坦克"
  public move(): void {
    console.log(`${this.name}}移动`)
  }
}

class Player extends Animations implements AnimationsInterface {
  name = '敌方坦克'
  public move(): void {
    console.log(`${this.name}移动`)
  }
}

let tank = new Tank();
let player = new Player();
tank.move();
player.move();