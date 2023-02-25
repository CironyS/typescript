const moveDecorators: ClassDecorator = (target: Function) => {
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 1000 };
  };
  target.prototype.name = "张三";
};

class Player {
  public getPosition() {}
}

const p = new Player();
moveDecorators(Player);
console.log((p as any).getPosition());

@moveDecorators
class Tack {}

const t = new Tack();
console.log((<any>t).getPosition());
