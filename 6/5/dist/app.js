var User;
(function (User) {
    User.hd = 'houdunren.com';
})(User || (User = {}));
/// <reference path="User.ts"/>
document.body.insertAdjacentHTML('beforeend', "<div style=\"background-color:red;\">".concat(User.hd, "</div>"));
