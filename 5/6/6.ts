const MessageDecorator: ClassDecorator = (target: Function) => {
  target.prototype.message = (content: string) => {
    console.log(content);
  };
};

@MessageDecorator
class LoginController {
  public login() {
    console.log("登录成功消息");
  }
  public message() {}
}

new LoginController().login();

new LoginController().message("登录业务处理");
