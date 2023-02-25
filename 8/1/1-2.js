"use strict";
function houdunren(arr) {
    return arr.map(a => a.render(a.id));
}
// <T extends >
houdunren([
    {
        id: 1,
        render(n) {
            return n;
        },
    },
]);
