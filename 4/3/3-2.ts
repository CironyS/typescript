type User = { name: string; age: number };

const user: User = { name: "后盾人", age: 23 };

const xj: User = { name: "向军", age: 18 };

class collentions<HD> {
  data: HD[] = [];

  public push(...items) {
    this.data.push(...items);
  }

  public shift(): HD {
    return this.data.shift()!;
  }
}

const collentionsString = new collentions<User>();
collentionsString.push("后盾人", "向军大叔");
console.log(collentionsString.shift());
