{
    type XIANGJUNDASHU = string;

    type HOUDUNREN = string | number;

    const hd: HOUDUNREN extends XIANGJUNDASHU ? string : boolean = false; //boolean

    const xj: XIANGJUNDASHU extends HOUDUNREN ? string : boolean = '后盾人'; //string
}
