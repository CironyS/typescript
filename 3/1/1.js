{
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
    var xj = new User('向军', 19);
    var Users = [];
    Users.push(hd, xj);
    console.log(Users);
}
