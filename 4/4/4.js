{
    var User = /** @class */ (function () {
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    var user = new User({ name: "张三", age: 18 });
    console.log(user.get().age);
}
