//->解决click的300ms延迟
FastClick.attach(document.body);
//->动态计算REM的值
~function () {
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = winW / 750 * 100 + "px";
}();

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});

function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            if(n==1 || n==6){
                slide.id = "page1";
                return
            }
            if(n>=2&&n<=4){
                slide.id = "page" + n;
                return
            }
            if(n==5 || n == 0){
                slide.id = "page5";
                return
            }
            slide.id = null;

        }
        slide.id = null;
    });
}




var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);