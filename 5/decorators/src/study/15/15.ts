export default () => {
  const user = {
    name: "向军大叔",
    isLogin: false,
  };
  const loginDecorator: MethodDecorator = (
    target: Object,
    ropertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value = () => {
      if (!user.isLogin) {
        alert("请先登录");
        location.href = "./login.html";
      } else {
        method();
      }
    };
  };

  class Article {
    show() {
      console.log("显示文章");
    }
    @loginDecorator
    store() {
      console.log("保存文章");
    }
  }
  //   new Article().store();
  new Article().show();
};
