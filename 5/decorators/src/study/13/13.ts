export default () => {
  const ErrorDecorators: MethodDecorator = (
    target: Object,
    ropertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;

    descriptor.value = () => {
      try {
        method();
      } catch (error: any) {
        console.log(
          `%choudunren.com 后盾人人人做后盾`,
          `font-size:30px;color:green`
        );
        console.log(`%c${error.message}`, `font-size:20px;color:red`);
      }
    };
  };

  class User {
    @ErrorDecorators
    public find() {
      throw new Error("您查找的用户不存在");
    }
    @ErrorDecorators
    public create() {
      throw new Error("创建用户失败");
    }
  }

  new User().find();
  //   new User().create();
};
