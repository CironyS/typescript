type userType = {
  name:string,
  age:number,
  sex?:number|string
}

let addType = (userType) => {
  console.log('添加用户');
  console.log('sex',userType.sex)
}

let updateType = (
  user:userType
) =>{
  console.log('更新用户')
  console.log('sex',user.sex)

}

addType({name:'张三',age:18,sex:'男'});
updateType({name:'李四',age:19,sex:1});