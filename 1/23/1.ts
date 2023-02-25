//对函数的结构定义

// let hd : (a:number,b:number) =>number

// hd = (x:number,y:number):number => {
//   return x+y
// }

// console.log('hd',hd(10,100));

//=================================================

type typeUser = {name:string,age:number}

type addUserFun = ( user:typeUser ) => boolean;

let addUser:addUserFun = (user: typeUser) :boolean => {
  console.log(user.name,user.age);
  return false;
}

console.log('addUser',addUser({name:"张三",age:18}))