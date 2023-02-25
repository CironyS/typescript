{
    type XIANGJUNDASHU = string;

    type HDCMS<T> = T extends XIANGJUNDASHU ? string : boolean;

    const hd: HDCMS<string> = '后盾人'; //string
}
