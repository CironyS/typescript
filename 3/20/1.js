// type与interface的差异对比
//interface接口继承
// interface Member {
//   name: string
// }
var Hd = /** @class */ (function () {
    function Hd() {
        this.name = '张三';
        this.age = 18;
    }
    return Hd;
}());
console.log(new Hd());
