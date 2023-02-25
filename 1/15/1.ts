// let hd:any = 'houdunren.com';
// hd = 123;
// hd = false;
// hd = [];
// hd = {};
// hd = null;
// hd = undefined;
// hd = class{}
// console.log('hd',hd);

// let hd:any[] = [];
// hd.push('houdunren.com',1,false,[],{},undefined,null);
// console.log('hd',hd);

// let hd :Array<any> = [];
// hd.push('houdunren.com',1,false,[],{},undefined,null);
// console.log('hd',hd);

// class hd {
//   constructor(){}
//   get = () =>{
//     console.log('get')
//   }
// }

// // let obj :any = new hd();
// let obj :hd = new hd();
// obj.get();
// obj.show();

function sum(a:number,b:number){
  return a+b;
}
console.log('sum',sum(10,20));
// 在typescript文件中打开"noImplicitAny": true,  设置会进行严格校验,设置成false或者去掉就不进行严格校验