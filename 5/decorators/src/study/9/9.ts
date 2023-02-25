export default () => {
  const showDecorators: MethodDecorator = (
    target: Object,
    ropertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    // 静止方法重写
    descriptor.writable = false;
    // descriptor.value = () => {
    //   console.log("132");
    // };
  };

  class User {
    @showDecorators
    public static show() {
      console.log("show me");
    }
  }

  User.show = () => {
    console.log("houdunren.com");
  };

  User.show();
};
