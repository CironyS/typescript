// hasOwnProperty表示是否有自己的属性。这个方法会查找一个对象是否有某个属性，但是不会去查找它的原型链。
var User = /** @class */ (function () {
    function User(n, m) {
        this.name = n;
        this.age = m;
    }
    User.prototype.info = function () {
        return "".concat(this.name, "\u7684\u5E74\u9F84\u662F").concat(this.age);
    };
    return User;
}());
var hd = new User('后盾人', 18);
var xj = new User('向军', 29);
for (var key in xj) {
    if (xj.hasOwnProperty(key)) {
        console.log(xj[key]);
    }
}
