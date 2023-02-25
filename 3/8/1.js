//单个实例:多次调用函数只创建一个实例
var Axios = /** @class */ (function () {
    function Axios() {
    }
    Axios.make = function () {
        if (Axios.instance === null) {
            console.log('创建了Axios实例');
            Axios.instance = new Axios();
        }
        return Axios.instance;
    };
    Axios.instance = null;
    return Axios;
}());
var instance0 = Axios.make();
var instance1 = Axios.make();
var instance2 = Axios.make();
var instance3 = Axios.make();
var instance4 = Axios.make();
var instance5 = Axios.make();
