//使用接口声明函数与接口声明合并
//使用接口对函数的约定
// interface pay{
//   (price:number):boolean
// }
var Player = /** @class */ (function () {
    function Player() {
        this.name = "张三";
    }
    Player.prototype.move = function () {
        console.log("".concat(this.name, "}\u79FB\u52A8"));
    };
    Player.prototype.end = function () {
        console.log("\u6E38\u620F\u7ED3\u675F");
    };
    return Player;
}());
console.log(new Player());
