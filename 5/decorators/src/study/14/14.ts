export default () => {
  const ErrorDecorators = (
    content: string = `houdunren.com 后盾人人人做后盾`,
    titleFontSize: number = 20
  ): MethodDecorator => {
    return (
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
            `%c${content}`,
            `font-size:${titleFontSize}px;color:green`
          );
          console.log(`%c${error.message}`, `font-size:20px;color:red`);
        }
      };
    };
  };

  class User {
    @ErrorDecorators()
    public find() {
      throw new Error("您查找的用户不存在");
    }
    @ErrorDecorators(`后盾人 https://www.houdunren.com`, 30)
    public create() {
      throw new Error("创建用户失败");
    }
  }

  //   new User().find();
  new User().create();
};
