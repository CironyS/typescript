// class User {
//   protected name: string
//   public age: number
//   constructor(n: string, m: number) {
//     this.name = n;
//     this.age = m;
//   }
//   protected info() {
//     return `${this.name}的年龄是${this.age}`
//   }
//   public show(){
//     this.info()
//   }
// }
// let hd = new User('后盾人', 18);
// let xj = new User('向军', 19);
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
// console.log('hd',hd.info())
// console.log('hd',hd.show())
// console.log('xj',xj.info())
// console.log('xj',xj.show())
//-----------------------------------------------------------
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.info = function () {
        return "".concat(this.name, "\u7684\u5E74\u9F84\u662F").concat(this.age);
    };
    return Users;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(n, m) {
        var _this = _super.call(this) || this;
        _this.name = n;
        _this.age = m;
        return _this;
    }
    User.prototype.show = function () {
        return this.info();
    };
    return User;
}(Users));
var hd = new User('后盾人', 18);
var xj = new User('向军', 19);
// console.log('hd', hd.info())
// console.log('hd', hd.show())
// console.log('xj', xj.info())
console.log('xj', xj.show());
