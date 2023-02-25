export default () => {
  const RequestDecorator = (url: string): MethodDecorator => {
    return (
      target: Object,
      ropertyKey: string | symbol,
      descriptor: PropertyDescriptor
    ) => {
      const method = descriptor.value;
      new Promise<any>(resolve => {
        resolve([{ name: "后盾人" }, { name: "向军大叔" }]);
      }).then(users => {
        method(users);
      });
    };
  };

  class User {
    @RequestDecorator("https://www.houdunren.com/api/user")
    public all(users: any[]) {
      console.log(users);
    }
  }
};
