var user = { name: "后盾人", age: 23 };
var xj = { name: "向军", age: 18 };
var collentions = /** @class */ (function () {
    function collentions() {
        this.data = [];
    }
    collentions.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, items);
    };
    collentions.prototype.shift = function () {
        return this.data.shift();
    };
    return collentions;
}());
var collentionsString = new collentions();
collentionsString.push("后盾人", "向军大叔");
console.log(collentionsString.shift());
