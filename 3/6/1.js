// class User {
//   public name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
// }
// let hd = new User('houdunren');
// console.log('hd', hd.name);
//在ts中是可以不用先写变量 直接在constructor中的参数添加修饰符比如说(public)
// class User {
//   public constructor(public name: string) {
//     this.name = name;
//   }
// }
// let hd = new User('houdunren');
// console.log('hd', hd.name);
//----------------------------------------------------
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = this.initName(name);
    }
    User.prototype.initName = function (name) {
        return "".concat(name, "-houdunren.com");
    };
    return User;
}());
var hd = new User('hd');
console.log('hd', hd.name);
