export default () => {
  type userType = { name: string; isLogin: boolean; permissions: string[] };

  const user: userType = {
    name: "向军大叔",
    isLogin: false,
    permissions: ["store"],
  };
  const loginDecorator = (keys: string[]): MethodDecorator => {
    return (
      target: Object,
      ropertyKey: string | symbol,
      descriptor: PropertyDescriptor
    ) => {
      const vilidate = () => keys.every(key => user.permissions.includes(key));
      const method = descriptor.value;
      descriptor.value = () => {
        if (user.isLogin === true && vilidate()) {
          return method();
        }
        alert("请先登录");
        location.href = "./login.html";
      };
    };
  };

  class Article {
    show() {
      console.log("显示文章");
    }
    @loginDecorator(["store", "show", "manage"])
    store() {
      console.log("保存文章");
    }
  }
  //   new Article().show();
  new Article().store();
};
