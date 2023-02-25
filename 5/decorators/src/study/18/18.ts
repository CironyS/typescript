export default () => {
  // 属性装饰器
  // 两个参数
  const PropertyDecorator: PropertyDecorator = (...arg: any[]) => {
    // console.log(arg[0]);
    // console.log(arg[1]);
  };

  // 参数装饰器
  // 三个参数
  const ParameterDecorator: ParameterDecorator = (...args: any[]) => {
    console.log(args);
  };

  class Hd {
    @PropertyDecorator
    public title: string | undefined;

    public show(
      @ParameterDecorator id: number,
      computed: boolean,
      content: string
    ) {}
  }
};
