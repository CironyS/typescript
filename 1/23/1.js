//对函数的结构定义
var addUser = function (user) {
    console.log(user.name, user.age);
    return false;
};
console.log('addUser', addUser({ name: "张三", age: 18 }));
