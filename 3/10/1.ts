//抽象类  抽象属性  抽象方法
abstract class Animations {
  abstract name: string
  abstract move(): void
  protected getPod(): { x: number, y: number } {
    return { x: 300, y: 500 }
  }
}

class Tank extends Animations {
  name = "我方坦克"
  public move(): void {
    console.log(`${this.name}}移动`)
  }
}

class Player extends Animations {
  name = '敌方坦克'
  public move(): void {
    console.log(`${this.name}移动`)
  }
}

let tank = new Tank();
let player = new Player();
tank.move();
player.move();