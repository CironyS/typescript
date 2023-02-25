type HOUDUNREN = { name: string };

interface houdunren extends HOUDUNREN {
    age: number;
}

const hd: houdunren = {
    name: '后盾人',
    age: 18,
};
console.log(hd);
