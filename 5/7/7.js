var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var musicDecoratorFactory = function (type) {
    switch (type) {
        case "Player":
            return function (target) {
                target.prototype.playMusic = function () {
                    console.log("播放战斗音乐");
                };
            };
        default:
            return function (target) {
                target.prototype.playMusic = function () {
                    console.log("播放喜洋洋音乐");
                };
            };
    }
};
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.playMusic = function () { };
    Player = __decorate([
        musicDecoratorFactory("Player")
    ], Player);
    return Player;
}());
var p = new Player();
p.playMusic();
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank.prototype.playMusic = function () { };
    Tank = __decorate([
        musicDecoratorFactory("Tank")
    ], Tank);
    return Tank;
}());
var t = new Tank();
t.playMusic();
