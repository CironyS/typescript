var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var moveDecorator = function (target) {
    target.prototype.getPosition = function () {
        return { x: 100, y: 1000 };
    };
    target.prototype.name = "张三";
};
var musicDecorator = function (target) {
    target.prototype.playMusic = function () {
        console.log("播放音乐");
    };
};
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.getPosition = function () { };
    Player.prototype.playMusic = function () { };
    Player = __decorate([
        moveDecorator,
        musicDecorator
    ], Player);
    return Player;
}());
var p = new Player();
console.log(p.getPosition());
p.playMusic();
