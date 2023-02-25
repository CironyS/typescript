/**
 *  属性装饰器
 *  转换小写
 */

const LowerDecorator: PropertyDecorator = (
    target: Object,
    propertyKey: string | symbol,
) => {
    let value: string;
    Object.defineProperty(target, propertyKey, {
        get: () => {
            return value.toLowerCase();
        },
        set: v => {
            value = v;
        },
    });
};

class Hd {
    @LowerDecorator
    public title: string | undefined;
}

const hd = new Hd();
hd.title = "HOUDUNRENCOM";
console.log(hd.title);
