//接口继承
// interface PlayEndInterface {
//   end(): void
// }

// interface AnimationsInterface extends PlayEndInterface {
//   name: string
//   move(): void
// }

// abstract class Animations {

//   protected getPod(): { x: number, y: number } {
//     return { x: 300, y: 500 }
//   }
// }

// class Tank extends Animations implements AnimationsInterface {
//   name = "我方坦克"
//   public move(): void {
//     console.log(`${this.name}}移动`)
//   }
//   public end(): void {
//     console.log(`游戏结束`)
//   }
// }

// class Player extends Animations implements AnimationsInterface {
//   name = '敌方坦克'
//   public move(): void {
//     console.log(`${this.name}移动`)
//   }
//   public end(): void {
//     console.log(`游戏结束`)
//   }
// }

// let tank = new Tank();
// let player = new Player();
// tank.end();
// player.end();

//----------------------------------------------
interface PlayEndInterface {
  end(): void
}

interface AnimationsInterface {
  name: string
  move(): void
}

abstract class Animations {

  protected getPod(): { x: number, y: number } {
    return { x: 300, y: 500 }
  }
}

class Tank extends Animations implements AnimationsInterface, PlayEndInterface {
  name = "我方坦克"
  public move(): void {
    console.log(`${this.name}}移动`)
  }
  public end(): void {
    console.log(`游戏结束`)
  }
}

class Player extends Animations implements AnimationsInterface, PlayEndInterface {
  name = '敌方坦克'
  public move(): void {
    console.log(`${this.name}移动`)
  }
  public end(): void {
    console.log(`游戏结束`)
  }
}

let tank = new Tank();
let player = new Player();
tank.end();
player.end();