// class Axios {
//   static site: string = "houdunren.com"
// }
// console.log(Axios.site);
var Axios = /** @class */ (function () {
    function Axios() {
    }
    Axios.getSite = function () {
        return Axios.site;
    };
    Axios.site = "houdunren.com1";
    return Axios;
}());
console.log(Axios.getSite());
