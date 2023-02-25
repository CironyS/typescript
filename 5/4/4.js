var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var moveDecorators = function (target) {
    target.prototype.getPosition = function () {
        return { x: 100, y: 1000 };
    };
    target.prototype.name = "张三";
};
// class Player {
//   public getPosition() {}
// }
// const p = new Player();
// moveDecorators(Player);
// console.log((p as any).getPosition());
var Tack = /** @class */ (function () {
    function Tack() {
    }
    Tack = __decorate([
        moveDecorators
    ], Tack);
    return Tack;
}());
var t = new Tack();
console.log(t.getPosition());
