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
var Article = /** @class */ (function () {
    function Article() {
        this._lists = [];
    }
    Object.defineProperty(Article.prototype, "article", {
        get: function () {
            return this._lists.map(function (item) {
                item.title = item.title.substr(0, 2);
                return item;
            });
        },
        set: function (lists) {
            this._lists = lists;
        },
        enumerable: false,
        configurable: true
    });
    return Article;
}());
var hd = new Article();
hd.article = [{ title: "后盾人" }, { title: 'houdunren' }];
console.log(hd.article);
