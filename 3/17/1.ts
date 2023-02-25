interface PayInterface {
  headle(price: number): void
}

class Wxpay implements PayInterface {
  headle(price: number): void {
    console.log(`微信付款${price}元`)
  }
}

class AliPay implements PayInterface {
  headle(price: number): void {
    console.log(`支付宝付款${price}元`);
  }
}

function pay(type: string, price: number) {
  let newPay: PayInterface
  switch (type) {
    case 'alipay':
      newPay = new AliPay()
      break;
    case 'wxpay':
      newPay = new Wxpay()
      break;
  }
  newPay.headle(price);
}