//DOM事件处理
var btn = document.querySelector('#bt');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.querySelector('body');
    body === null || body === void 0 ? void 0 : body.insertAdjacentHTML('beforeend', '<h2>你好啊</h2>');
});
