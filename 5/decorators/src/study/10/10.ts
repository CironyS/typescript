export default () => {
  const highlightDecorators: MethodDecorator = (
    target: Object,
    ropertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value();

    descriptor.value = () => {
      return `<div style="color:red">${method}</div>`;
    };
  };

  class User {
    @highlightDecorators
    public response() {
      return "houdunren.com";
    }
  }

  document.body.insertAdjacentHTML("beforebegin", new User().response());
};
