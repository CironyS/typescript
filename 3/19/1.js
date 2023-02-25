//type 基本类型的别名 联合类型
var hd = {
    name: '张三',
    age: 18,
    isAdmin: false,
    sex: 'girl',
    show: function () { return "".concat(hd.name, "\u7684\u5E74\u9F84\u662F").concat(hd.age); }
};
console.log(hd.isAdmin);
console.log(hd.sex);
