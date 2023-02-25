"use strict";
var User;
(function (User) {
    User.hd = 'houdunren.com';
    let Member;
    (function (Member) {
        Member.name = '向军大叔';
    })(Member = User.Member || (User.Member = {}));
})(User || (User = {}));
console.log(User.Member.name);
