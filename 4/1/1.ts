// 泛型 generics

// let a: string = "houdunren.com";
// a = "34";
// console.log(a);

function dump<T>(arg: T): T {
  return arg;
}

let hd = dump<string>("houdunren.com");

// console.log(hd);

let xj = dump<boolean>(false);
console.log(xj);
