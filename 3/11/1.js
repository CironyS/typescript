//接口使用方法:使用interface关键字进行定义  使用implements进行继承
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animations = /** @class */ (function () {
    function Animations() {
    }
    Animations.prototype.getPod = function () {
        return { x: 300, y: 500 };
    };
    return Animations;
}());
var Tank = /** @class */ (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "我方坦克";
        return _this;
    }
    Tank.prototype.move = function () {
        console.log("".concat(this.name, "}\u79FB\u52A8"));
    };
    return Tank;
}(Animations));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '敌方坦克';
        return _this;
    }
    Player.prototype.move = function () {
        console.log("".concat(this.name, "\u79FB\u52A8"));
    };
    return Player;
}(Animations));
var tank = new Tank();
var player = new Player();
tank.move();
player.move();
