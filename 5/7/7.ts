const musicDecoratorFactory = (type: string) => {
  switch (type) {
    case "Player":
      return (target: Function) => {
        target.prototype.playMusic = () => {
          console.log("播放战斗音乐");
        };
      };

    default:
      return (target: Function) => {
        target.prototype.playMusic = () => {
          console.log("播放喜洋洋音乐");
        };
      };
  }
};

@musicDecoratorFactory("Player")
class Player {
  public playMusic() {}
}

const p = new Player();
p.playMusic();

@musicDecoratorFactory("Tank")
class Tank {
  public playMusic() {}
}

const t = new Tank();
t.playMusic();
