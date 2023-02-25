var user = {
    name: "张三",
    age: 18,
    isLock: false
};
function fnUser(User, lock) {
    User.isLock = lock;
    console.log(User);
    return User;
}
fnUser(user, true);
