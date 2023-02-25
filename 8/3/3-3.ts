{
    type XIANGJUNDASHU = string;

    type HOUDUNREN = string | number;

    type HDCMS<T> = T extends XIANGJUNDASHU
        ? string
        : T extends HOUDUNREN
        ? symbol
        : boolean;

    const hd: HDCMS<string | number> = '后盾人';
    // const hd: HDCMS<string | number> = Symbol('123');
    console.log(hd);
}
