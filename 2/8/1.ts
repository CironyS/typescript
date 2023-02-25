// 使用断言告诉赋值要的类型

// let aLink = document.querySelector("#aLink") as HTMLLinkElement;

//class构造函数需要的强制断言
class hd {
  el: HTMLDivElement
  constructor(el: HTMLDivElement) {
    this.el = el
  }
  html() {
    return this.el.innerHTML
  }
}

let xj = document.querySelector('.hd') as HTMLDivElement;

let newXj = new hd(xj);

console.log(newXj.html());