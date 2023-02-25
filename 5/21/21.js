"use strict";
exports.__esModule = true;
require("reflect-metadata");
var hd = {
    name: '后盾人'
};
Reflect.defineMetadata('xj', { name: 'houdunren.com' }, hd, 'name');
console.log(Reflect.getMetadata('xj', hd, 'name'));
