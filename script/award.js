function winsize(){
    winW = $(window).innerWidth();
}
// $(window).resize(function(){
//     document.location.reload();
//     winsize();
// });

//모바일 반응형 reload로 인한 문제 해결 코드
//사이즈가 변경될 시에만 reload하도록..!

winW = $(window).innerWidth();
lastWidth = $(window).innerWidth();
//동일한 값이지만 변수명으로 구분 이해가 쉽도록

console.log(winW);

$(window).resize(function(){
if(winW != lastWidth){
	location.reload();
    winsize();
    //winW와 lastWidth가 다르면 새로고침
}
lastWidth = $(window).innerWidth();
//리사이즈 된 윈도우 넓이 값을 lastWidth에 넣어줌
console.log(lastWidth);
});

    // let mySwiper = undefined;

    // function initSwiper(){
    //     if (winW <= 600 && mySwiper == undefined) {
    //         let swiper = new Swiper(".mySwiper", {
    //                     slidesPerView: 4,
    //                     spaceBetween: 30,
    //                     centeredSlides: true,
    //                     observer : true,
    //                     observeParents : true,
    //                   });
    //           } else if (winW > 600 && mySwiper != undefined) {
    //         mySwiper.destroy();
    //         mySwiper = undefined;
    //       }
    // }
    
    // initSwiper();
    

    if(winW > 960){
        
    const text = $("#award_text > ul > li"); 
    const total = $("#award_text");
    const game = $("#award_img > figure");
    const $new_ch = $("#new > article")
    const $new_ch_h = $("#new > article").outerHeight()
    
    // #new의 높이값을 설정
    $("#new").css({height : `${$new_ch_h*($new_ch.length+1)}px`})
    
        console.log($new_ch_h)
        // 아티클의 개수에 영향을 받아요 
        console.log($new_ch.length)
            //parallax 효과
            // 게임 섹션의 모든 article 요소를 선택합니다.
            const $section = $("#award_img > figure");
            const $sectionInfo = []; // 각 article의 offset top 값을 저장할 배열입니다.
    
            // 각 article 요소의 offset top 값을 구하여 $sectionInfo 배열에 저장합니다.
            $section.each(function() {
                const $this = $(this);
                const offsetTop = $this.offset().top;
                $sectionInfo.push(offsetTop);
            });
    
            // 현재 창의 높이를 구합니다.
            const windowHeight = $(window).height();
    
            // 각 article의 top 값을 백분율로 변환하여 저장합니다.
            const percentageTops = $sectionInfo.map(top => ((top / $(document).height()) * 100).toFixed(2) + '%');
    
            // 각 article의 top 값을 백분율로 출력합니다.
            // console.log(percentageTops);
    
            // 각 article의 CSS 속성을 고정시킵니다.
            $section.css({ position: 'fixed'});
    
            // 스크롤 이벤트 리스너를 등록합니다.
            $(window).scroll(function() {
                let sct = $(this).scrollTop(); // 현재 스크롤 위치를 구합니다.
                $section.each(function(idx) {
                    let $this = $(this);
                    let $newtop = $sectionInfo[idx] - sct;
    
            // 스크롤이 일정 위치 이상 내려갔을 때, 스크롤 속도를 조정합니다.
            if (sct > $sectionInfo[idx]) {
                $newtop = $newtop * 0.6;
    
                text.removeClass("active");
                text.eq(idx).addClass("active")
                
            }
            // console.log($sectionInfo[3]-100);
     
             // article 요소의 top 값을 조정하여 화면에서 이동하는 효과를 만듭니다.
             $this.css({ top: $newtop });
             });
    // ---
    
    
            const brandStory = $("#brand_story"); // brand_story 섹션을 선택합니다.
            const textSection = $("#award_text"); // text 섹션을 선택합니다.
    
            // brand_story 섹션의 높이를 구합니다.
            const brandStoryHeight = brandStory.outerHeight();
            // console.log(brandStoryHeight)
    
            // brand_story 섹션의 상단 위치와 높이를 더하여 끝나는 지점을 구합니다.
            const brandStoryEnd = brandStory.offset().top + brandStoryHeight;
    
            const gameArticles = $("#award_img > figure"); // game 섹션의 article들을 선택합니다.
    
            // game 섹션의 마지막 article의 위치를 구합니다.
            const lastGameArticle = gameArticles.eq(3);
            const lastGameArticle_h = lastGameArticle.outerHeight()
            const lastGameArticleTop = lastGameArticle.offset().top;
            //  console.log(lastGameArticle_h)
             if (sct >= brandStoryEnd - 200) {
                
                    textSection.css({display:'block', position: 'fixed', top:0}); // text 섹션의 position을 fixed로 변경합니다.
                
            } else {
                textSection.css({display:'none'}); // 그렇지 않으면 position을 static으로 설정합니다.
            }
    
            if (sct >= lastGameArticleTop + lastGameArticle_h) {
                textSection.css({display: 'none'}); // text 섹션의 position을 static으로 설정하여 fixed를 해제합니다.
            } else {
                textSection.css({ position: 'fixed', top: 0 }); // 그렇지 않으면 text 섹션을 fixed로 유지합니다.
            }
             
            if(sct >= lastGameArticleTop){
                textSection.css({top:`${ ($sectionInfo[3] - sct)*0.06}%`})
                // console.log(($sectionInfo[3] - sct)/0.06)
                // console.log(($sectionInfo[3] - sct)*0.6)
            }
            let award = $("#award")
            let award_top = award.offset().top
            let award_height = award.outerHeight()
            // brandStoryHeight
            let award_bottom = award_top + award_height; 
            console.log(award_bottom)
            let $new = $("#new")
            
            let $new_top = $new.offset().top
            let new_box_txt =$(".new_box_txt")
            let new_box = $(".new_box")
            let in_left = $(".in_left")
    
    
            let x = -(sct - $new_top - brandStoryHeight)/brandStoryHeight
            let x2 = -(sct - $new_top - brandStoryHeight*2)/brandStoryHeight
            // console.log(x2*100)
            if(x >= 0){//x가 0 또는 음수가 됐을 때
                new_box.css({left : `${x*100}%`,position:'fixed',top:0})
                new_box_txt.css({left:`${-x*100}%`,position:'fixed',top:'0%'})
                in_left.css({left : `${x2*100}%`,position:'fixed',top:'0'})
            }else if(x >= -1 && x2 >= 0){//x가 -1또는 양수 그리고 x2가 0또는 양수가 됐을 때
                new_box.css({left : `0%`,position:'fixed', top:'0'})
                new_box_txt.css({left : `0%`,position:'fixed', top:'0'})
                in_left.css({left:`${x2*100}%`,position:'fixed',top:0})
    
            }else{//나머지(-1.1...-1.9)등
                new_box.css({left : `0%`,position:'absolute', top:`${$new_ch_h*($new_ch.length)}px`})
                new_box_txt.css({left : `${0}%`,position:'absolute',top:`${$new_ch_h*($new_ch.length)}px`})
                in_left.css({left : `${0}%`,position:'absolute',top:`${$new_ch_h*($new_ch.length)}px`})
    
            }
         });
    }
    if(winW <= 960){

        const awardbtn = $("#award_retext > ul > li");
            const awardimg = $("#award_img > figure");
            const arwardtext = $("#award_text > ul > li > h4")

            awardimg.hide().eq(0).show();
            arwardtext.hide().eq(0).show();
    
            awardbtn.click(function(e){
                e.preventDefault()

                awardbtn.removeClass("active");
                $(this).addClass("active")
    
                let tt = $(this);
                let index = tt.index();
                console.log(index);
                
                awardimg.hide().eq(index).show();
                arwardtext.hide().eq(index).show();
    
                console.log(index);
            });

            $(window).scroll(function() {
                let sct = $(this).scrollTop();
                
                // if(sct < $("#new").offset().top -200){
                //     $(".in_left > .left_img").removeClass("on");
                //     $(".new_box_txt .text").removeClass("on");
                // }
                if(sct >= $("#new").offset().top -200){
                    $(".in_left > .left_img").addClass("on");
                    $(".new_box_txt .text").addClass("on");
                }
                if(sct < $("#new").offset().top -200){
                    $(".left_img").removeClass("on");
                    $(".new_box_txt .text").removeClass("on");
                }
            });
       
        }
        if(winW <=600){
            console.log("600이하")
            const awardimg = $("#award_img > figure");
            awardimg.show()
            const arwardtext = $("#award_text > ul > li > h4")
            arwardtext.show()

            $(".left_img").removeClass("on");
            $(".new_box_txt .text").removeClass("on");
        }
        // else{
        //     swiper.destroy()
        // }
       