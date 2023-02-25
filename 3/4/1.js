// class Users {
//   protected name: string
//   public age: number
//   private info() {
//     return `${this.name}的年龄是${this.age}`
//   }
//   protected getInfo() {
//     return this.info()
//   }
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
// }
// class User extends Users {
//   constructor(n: string, m: number) {
//     super();
//     this.name = n;
//     this.age = m;
//   }
//   public show() {
//     return this.getInfo()
//   }
// }
// let hd = new User('后盾人', 18);
// let xj = new User('向军', 19);
// console.log('hd', hd.show())
// console.log('xj', xj.show())
//---------------------------------------------------------------
// class Users {
//   protected name: string
//   public age: number
//   private info() {
//     return `${this.name}的年龄是${this.age}`
//   }
//   protected getInfo() {
//     return this.info()
//   }
// }
// class User extends Users {
//   constructor(n: string, m: number) {
//     super();
//     this.name = n;
//     this.age = m;
//   }
//   private getInfo() {
//     return '123'
//   }
//   public show() {
//     return this.getInfo()
//   }
// }
// let hd = new User('后盾人', 18);
// let xj = new User('向军', 19);
// console.log('hd', hd.show())
// console.log('xj', xj.show())
//---------------------------------------------------------------
var Users = /** @class */ (function () {
    function Users() {
        this.site = '后盾人网站';
    }
    Users.prototype.info = function () {
        return "".concat(this.name, "\u7684\u5E74\u9F84\u662F").concat(this.age, ",Ta\u6765\u81EA\u4E8E").concat(this.site, "\u7236\u7C7B");
    };
    Users.prototype.getInfo = function () {
        return this.info();
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
    User.prototype.info = function () {
        return "".concat(this.name, "\u7684\u5E74\u9F84\u662F").concat(this.age, ",Ta\u6765\u81EA\u4E8E").concat(this.site, "\u5B50\u7C7B");
    };
    User.prototype.show = function () {
        return this.getInfo();
    };
    return User;
}(Users));
var hd = new User('后盾人', 18);
var xj = new User('向军', 19);
console.log('hd', hd.show());
console.log('xj', xj.show());
