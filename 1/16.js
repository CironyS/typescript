// let hd:any = "houdunren.com"
// let a:string = hd 
// console.log('a',a);
// let hd:unknown = "houdunren.com"
// let a:string = hd as string;
// console.log('a',a)
//any表示不进行任何校验,表示可以进行任何赋值
//而unknown表示不知道这个值是什么类型,但是unknown本身也是一种类型(只是不是具象化)
//使用as进行类型断言,可以在赋值的时候告诉要赋值的对象赋值类型
var hd = '99';
var a = hd;
console.log('a', a);
//有的使用使用unknown进行类型的转换
