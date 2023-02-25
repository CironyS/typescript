export default () => {
  const sleepDecorators: MethodDecorator = (
    target: Object,
    ropertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value = () => {
      setTimeout(() => {
        method();
      }, 5000);
    };
  };

  class User {
    @sleepDecorators
    public sleep() {
      console.log("houdunren.com");
    }
  }

  new User().sleep();
};
