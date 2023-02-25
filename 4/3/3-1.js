/**
 * 泛型在类中的使用
 */
// class numberCollention {
//   data: number[] = [];
//   public push(...items) {
//     this.data.push(...items);
//   }
//   public shift(): number {
//     return this.data.shift();
//   }
// }
// const collentionNumber = new numberCollention();
// collentionNumber.push(1, 2, 3, 4, 5);
// console.log(collentionNumber.shift());
// -------------------------------------------------------------------------
// class stringCollention {
//   data: string[] = [];
//   public push(...items) {
//     this.data.push(...items);
//   }
//   public shift(): string | undefined {
//     return this.data.shift();
//   }
// }
// const collentionNumber = new stringCollention();
// collentionNumber.push("后盾人", "向军大叔");
// console.log(collentionNumber.shift());
// -------------------------------------------------------------------------
var collention = /** @class */ (function () {
    function collention() {
        this.data = [];
    }
    collention.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, items);
    };
    collention.prototype.shift = function () {
        return this.data.shift();
    };
    return collention;
}());
var collentionString = new collention();
collentionString.push("后盾人", "向军大叔");
console.log(collentionString.shift());
var collentionNumber = new collention();
collentionNumber.push(1, 2, 3, 4, 5);
console.log(collentionNumber.shift());
