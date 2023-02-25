const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 1000 };
  };
  target.prototype.name = "张三";
};

const musicDecorator: ClassDecorator = (target: Function) => {
  target.prototype.playMusic = () => {
    console.log("播放音乐");
  };
};

@moveDecorator
@musicDecorator
class Player {
  public getPosition() {}
  public playMusic() {}
}

const p = new Player();
console.log(p.getPosition());
p.playMusic();
