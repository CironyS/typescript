//DOM事件处理
let btn = document.querySelector('#bt') as HTMLButtonElement;

btn.addEventListener('click', (e: Event) => {
  e.preventDefault();
  let body = document.querySelector('body');
  body?.insertAdjacentHTML('beforeend', '<h2>你好啊</h2>')

})
