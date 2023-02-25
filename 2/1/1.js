//枚举使用
// enum SexType  {
//  BOY,GIRL
// }
// enum SexType  {
//     BOY=9,GIRL
// }
var SexType;
(function (SexType) {
    SexType["BOY"] = "\u7537";
    SexType["GIRL"] = "\u5973";
})(SexType || (SexType = {}));
var user = {
    name: '后盾人',
    sex: 1
};
console.log(SexType.BOY);
console.log(SexType.GIRL);
