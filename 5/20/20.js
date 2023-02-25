/**
 * 生成随机颜色
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RandomColorDecorator = function (target, propertyKey) {
    var colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "brown",
        "#383838",
    ];
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return colors[Math.floor(Math.random() * colors.length)];
        }
    });
};
var Hd = /** @class */ (function () {
    function Hd() {
    }
    Hd.prototype.draw = function () {
        return document.body.insertAdjacentHTML("beforeend", "<div style=\"width:200px;height:200px;background-color:".concat(this.color, "\">houdunren.com \u540E\u76FE\u4EBA</div>"));
    };
    __decorate([
        RandomColorDecorator
    ], Hd.prototype, "color");
    return Hd;
}());
new Hd().draw();
