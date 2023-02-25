//interface结合enum与array
var sexType;
(function (sexType) {
    sexType[sexType["BOY"] = 0] = "BOY";
    sexType[sexType["GRIL"] = 1] = "GRIL";
})(sexType || (sexType = {}));
var xj = {
    name: "向军", age: 19, sex: sexType.BOY
};
var hd = {
    name: "后盾人", age: 18, sex: sexType.GRIL
};
var newArray = [xj, hd];
console.log(newArray);
