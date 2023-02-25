{
    // 开启严格校验模式   "strictNullChecks": true,
    // let hd: string | null | undefined = "houdunrem.com"
    // hd = null
    // hd = undefined
    // console.log(hd);
    // let hd: HTMLDivElement = document.querySelector('.hd') as HTMLDivElement
    var hd = document.querySelector('.hd');
    console.log('hd', hd.innerHTML);
}
