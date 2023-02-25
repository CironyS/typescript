function sum(a:number,b:number){
  return a+b;
}

console.log(sum('hd',3));

//js:不会对传入的类型进行校验判断,导致非该类型也能正常运行
//ts:会对传入的类型进行校验判断,传入类型不合法直接报错