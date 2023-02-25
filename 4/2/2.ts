/**
 * 泛型的继承
 * 出现返回值报错情况下可以对泛型进行约束(校验)
 */

// function getLength<T extends { length: number }>(arg: T): number {
//   return arg.length;
// }

// function getLength<T extends string | any[]>(arg: T): number {
//   return arg.length;
// }

function getLength<T extends string[]>(arg: T): number {
  return arg.length;
}

// console.log(getLength("houdunren.com"));
console.log(getLength(["后盾人", "向军"]));

// type Skyle = { length: number };
// let a: Skyle = "houdunren.com";
// console.log(a);
