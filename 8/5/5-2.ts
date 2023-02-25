{
    type XIANGJUNDASHU = string;

    type HOUDUNREN = string | number;

    const hd: Exclude<HOUDUNREN, XIANGJUNDASHU> = 100;
}
