/**
 * 泛型在类中的使用
 */

// class numberCollention {
//   data: number[] = [];

//   public push(...items) {
//     this.data.push(...items);
//   }

//   public shift(): number {
//     return this.data.shift();
//   }
// }

// const collentionNumber = new numberCollention();
// collentionNumber.push(1, 2, 3, 4, 5);
// console.log(collentionNumber.shift());

// -------------------------------------------------------------------------

// class stringCollention {
//   data: string[] = [];

//   public push(...items) {
//     this.data.push(...items);
//   }

//   public shift(): string | undefined {
//     return this.data.shift();
//   }
// }

// const collentionNumber = new stringCollention();
// collentionNumber.push("后盾人", "向军大叔");
// console.log(collentionNumber.shift());

// -------------------------------------------------------------------------

class collention<HD> {
  data: HD[] = [];

  public push(...items) {
    this.data.push(...items);
  }

  public shift(): HD {
    return this.data.shift()!;
  }
}

const collentionString = new collention<string>();
collentionString.push("后盾人", "向军大叔");
console.log(collentionString.shift());

const collentionNumber = new collention<number>();
collentionNumber.push(1, 2, 3, 4, 5);
console.log(collentionNumber.shift());
