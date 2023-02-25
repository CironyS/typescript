type XIANGJUNDASHU = string | number;
// type XIANGJUNDASHU = string;

type HOUDUNREN = string | number;

type HDCMS<T> = [T] extends [XIANGJUNDASHU] ? string : boolean;

const hd: HDCMS<string | number> = '后盾人'; //string
// const hd: HDCMS<string | number> = 123; //string
