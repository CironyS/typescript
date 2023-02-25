export default () => {
  //   const showDecorators: MethodDecorator = (...args: any[]) => {
  //     args[0].name = "后盾人";
  //     args[2].value = () => {
  //       console.log("132");
  //     };
  //   };

  //   class User {
  //     @showDecorators
  //     public show() {
  //       console.log("show me");
  //     }
  //   }
  //   new User().show();
  //   console.log(new User().name);

  const showDecorators: MethodDecorator = (
    target: Object,
    ropertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    target.name = "后盾人";
    descriptor.value = () => {
      console.log("132");
    };
  };

  class User {
    @showDecorators
    public show() {
      console.log("show me");
    }
  }
  new User().show();
  console.log(new User().name);
};
