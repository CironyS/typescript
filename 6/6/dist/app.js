define("User", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.name = exports.User = void 0;
    var User;
    (function (User) {
        User.hd = 'houdunren.com';
    })(User = exports.User || (exports.User = {}));
    exports.name = 'houdunren -- 后盾人';
});
define("App", ["require", "exports", "User"], function (require, exports, User_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.body.insertAdjacentHTML('beforeend', `<div style="background-color:red;">${User_1.User.hd}</div>`);
});
