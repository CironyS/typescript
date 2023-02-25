//枚举使用
//不设置默认值情况下
// enum SexType  {
//  BOY,GIRL
// }

//设置的默认值是数字情况下
// enum SexType  {
//     BOY=9,GIRL
// }

//设置的默认值是非数字情况下
enum SexType  {
    BOY = '男',GIRL = "女"
}

let user = {
    name:'后盾人',
    sex:1
}

console.log(SexType.BOY);
console.log(SexType.GIRL);