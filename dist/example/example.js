function getRem(width){
    var value = document.documentElement.clientWidth;
    var ua = navigator.userAgent;

    if (ua.match(/MI 5/) && ua.match(/QQBrowser/) && ! ua.match(/MicroMessenger/)) {
        value = (3 * value) / 2.6 // 小米虽然 dpr 是3 但表现的依然是 2.6
    }

    var  deviceWidth = Math.min(width, value)
    
    document.documentElement.style.fontSize = deviceWidth / (width / 100) + 'px';
};

getRem(640)