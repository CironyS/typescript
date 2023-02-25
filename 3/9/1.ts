//tsc 1.ts -w -t es5

// class User {
//   private _name: string
//   public constructor(name: string) {
//     this._name = name
//   }
//   public get name(): string {
//     return this._name
//   }
//   public set name(name: string) {
//     this._name = name
//   }
// }
// let hd = new User('后盾人')
// // hd.name = "向军"
// console.log(hd.name);

//--------------------------------------

// class Article {
//   private _lists: any[] = []
//   public set article(lists: any[]) {
//     this._lists = lists
//   }
//   public get article() {
//     return this._lists
//   }
// }

// let hd = new Article()
// hd.article = [{ title: "后盾人" }, { title: 'houdunren' }]
// console.log(hd.article);

//--------------------------------------

class Article {
  private _lists: any[] = []
  public set article(lists: any[]) {
    this._lists = lists
  }
  public get article() {
    return this._lists.map(item => {
      item.title = item.title.substr(0, 2)
      return item;
    })
  }
}

let hd = new Article()
hd.article = [{ title: "后盾人" }, { title: 'houdunren' }]
console.log(hd.article);