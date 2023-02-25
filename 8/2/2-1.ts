{
    type XIANGJUNDASHU = { name: string; age: number };

    type HOUDUNREN = { name: string };

    type HDCMS = HOUDUNREN extends XIANGJUNDASHU ? true : false;

    const hd: HDCMS = false;
}
