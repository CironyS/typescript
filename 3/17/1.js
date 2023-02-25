var Wxpay = /** @class */ (function () {
    function Wxpay() {
    }
    Wxpay.prototype.headle = function (price) {
        console.log("\u5FAE\u4FE1\u4ED8\u6B3E".concat(price, "\u5143"));
    };
    return Wxpay;
}());
var AliPay = /** @class */ (function () {
    function AliPay() {
    }
    AliPay.prototype.headle = function (price) {
        console.log("\u652F\u4ED8\u5B9D\u4ED8\u6B3E".concat(price, "\u5143"));
    };
    return AliPay;
}());
function pay(type, price) {
    var newPay;
    switch (type) {
        case 'alipay':
            newPay = new AliPay();
            break;
        case 'wxpay':
            newPay = new Wxpay();
            break;
    }
    newPay.headle(price);
}
