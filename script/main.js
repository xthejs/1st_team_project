$(window).scroll(function(){
    var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
    scrollPercent = (scroll / (dh-wh)) * 100;
    $('#scrollbar').css('height',scrollPercent + '%');
});


$(".greed").click(function(){
    $(".title").addClass("active");
    if($(".box5").hasClass("active")){
        $(".titlebox").addClass("on");
    };
});

// title에 마우스 올려두었다 떼면 애니메이션 멈췄다 재생
$(".title").hover(function(){
    $(".titlebox").css("animation-play-state", "paused")
}, function(){
    $(".titlebox").css("animation-play-state", "running")
});