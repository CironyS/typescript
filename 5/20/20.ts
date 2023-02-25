/**
 * 生成随机颜色
 */

const RandomColorDecorator: PropertyDecorator = (
    target: Object,
    propertyKey: string | symbol,
) => {
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "brown",
        "#383838",
    ];
    Object.defineProperty(target, propertyKey, {
        get: () => {
            return colors[Math.floor(Math.random() * colors.length)];
        },
    });
};

class Hd {
    @RandomColorDecorator
    public color: string | undefined;

    public draw() {
        return document.body.insertAdjacentHTML(
            "beforeend",
            `<div style="width:200px;height:200px;background-color:${this.color}">houdunren.com 后盾人</div>`,
        );
    }
}

new Hd().draw();
