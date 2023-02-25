export default () => {
  const sleepDecorators =
    (times: number): MethodDecorator =>
    (...args: any[]) => {
      const [, , descriptor] = args;
      const method = descriptor.value;
      descriptor.value = () => {
        setTimeout(() => {
          method();
        }, times);
      };
    };
  class User {
    @sleepDecorators(2000)
    public sleep() {
      console.log("houdunren.com");
    }
  }

  new User().sleep();
};
