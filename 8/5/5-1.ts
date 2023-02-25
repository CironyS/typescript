{
    type EXCLUDE<T, U> = T extends U ? never : T;

    type XIANGJUNDASHU = string;

    type HOUDUNREN = string | number;

    const hd: EXCLUDE<HOUDUNREN, XIANGJUNDASHU> = 100; //number
}
