//readonly值不可以进行修改    readonly可以在前面添加修饰符
//在class类中readonly可以在初始化constructor中进行修改

// class Axios {
//   readonly site = "https://www.houdunren.com/api"
//   public get(url: string) {
//     console.log(`网址是${this.site}/${url}`);
//     return []
//   }
// }

// let instance = new Axios();
// instance.get('users')

//-------------------------------------------------------------------------

// class Axios {
//   readonly site = "https://www.houdunren.com/api";
//   public constructor(site?: string) {
//     this.site = site || this.site
//   }
//   public get(url: string): any[] {
//     console.log(`访问的网址是${this.site}/${url}`);
//     return [];
//   }
// };

// let instance = new Axios("https://www.houdunwang.com/api");
// instance.get('users');

//-------------------------------------------------------------------------

class Axios {
  protected readonly site = "https://www.houdunren.com/api";
  public constructor(site?: string) {
    this.site = site || this.site
  }
  public get(url: string): any[] {
    console.log(`访问的网址是${this.site}/${url}`);
    return [];
  }
};

let instance = new Axios();
instance.get('users');
console.log(instance.site);