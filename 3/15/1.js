var User = /** @class */ (function () {
    function User(user) {
        this._info = user;
    }
    Object.defineProperty(User.prototype, "info", {
        get: function () {
            return this._info;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var hd = new User({ name: '张三', age: 19 });
console.log(hd.info);
