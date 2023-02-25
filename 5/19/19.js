/**
 *  属性装饰器
 *  转换小写
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LowerDecorator = function (target, propertyKey) {
    var value;
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return value.toLowerCase();
        },
        set: function (v) {
            value = v;
        }
    });
};
var Hd = /** @class */ (function () {
    function Hd() {
    }
    __decorate([
        LowerDecorator
    ], Hd.prototype, "title");
    return Hd;
}());
var hd = new Hd();
hd.title = "HOUDUNRENCOM";
console.log(hd.title);
