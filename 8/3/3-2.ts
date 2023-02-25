{
    type XIANGJUNDASHU = string;

    type HDCMS<T> = T extends XIANGJUNDASHU ? string : boolean;

    const hd: HDCMS<string | number> = '后盾人'; //string | boolean
    // const hd: HDCMS<string | number> = false; //string | boolean
    console.log(hd);
}
