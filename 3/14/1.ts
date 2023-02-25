interface UserInterface { name: string, age: number, isLock: boolean }

let user: UserInterface = {
  name: "张三",
  age: 18,
  isLock: false
}

function fnUser(User: UserInterface, lock: boolean) {
  User.isLock = lock
  console.log(User);
  return User
}

fnUser(user, true);