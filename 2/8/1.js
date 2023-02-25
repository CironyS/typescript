// 使用断言告诉赋值要的类型
// let aLink = document.querySelector("#aLink") as HTMLLinkElement;
//class构造函数需要的强制断言
var hd = /** @class */ (function () {
    function hd(el) {
        this.el = el;
    }
    hd.prototype.html = function () {
        return this.el.innerHTML;
    };
    return hd;
}());
var xj = document.querySelector('.hd');
var newXj = new hd(xj);
console.log(newXj.html());
