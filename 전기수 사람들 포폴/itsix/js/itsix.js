$(function () {

    // logo 클릭시 최상단 
    $(".logo").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0 // 수직 스크롤 위치 
        }, 400);
    });

    // harf의 #으로 시작하는 요소 클릭시
    $(".menu li a[href^='#']").on("click", function () {
        var target = $(this).attr("href")
        var targetPosition = $(target).offset().top;

        // 애니메이션 설정 
        $("html,body").animate({
            scrollTop: targetPosition
        }, 800);

        // 클릭한 메뉴에 .active 추가 
        $(".menu li a").removeClass("active"); // 모든 a에 active 삭제
        $(this).addClass("active"); // 클릭한 a에만 active 추가 
    });

// 모바일 메뉴 보기,가리기
$(".rightmenu li").eq(2).click(function(){
    $(".m_menu").show();
    $(".rightmenu").hide();
    $(".m_menu li").eq(3).show();
});

$(".m_menu li").eq(3).click(function(){
    $(".m_menu").hide();
    $(this).hide();
    $(".rightmenu").show();
});



    // 스크롤 이벤트 
    // 스크롤이 위로 올라갈수록 해당 요소들이 동적으로 변경되는 스크립트
    $(window).scroll(function () {
        // 스크롤 위치값을 scr에 넣어줌
        var scr = $(this).scrollTop();

        $(".center_bg li").eq(0).css({
            "top": -100 + (scr / 2)
        });
        $(".center_bg li").eq(1).css({
            "top": -100 + (scr / 1.7)
        });
        $(".center_bg li").eq(2).css({
            "top": 80 + (scr / 3)
        });
        $(".center_bg li").eq(3).css({
            "top": 60 + (scr / 5)
        });
        $(".center_bg li").eq(4).css({
            "top": 10 + (scr / 5)
        });
        $(".center_bg li").eq(5).css({
            "top": -60 + (scr / 2)
        });

        $(".center_bg li").eq(6).css({
            "transform": "translate(-50%," + (-50 - (scr / 100)) + "%)"
        });

        // hexagon 
        $(".hexagon ").css({
            "transform": "translate(-50%," + (-50 - (scr / 99.5)) + "%)"
        });

        // redcarpet 에 대한 스크롤에 따른 스타일 변경  
        // 스크롤 위치가 이동하면 Y위치를 기준으로 위로 올라감 
        $("#redcarpet").css({
            "transform": "translateY(" + (0 - (scr / 2.5)) + "px)"
        });

        // port_bg - 4종 스크롤에 따른 위치변경

        $(".port_bg li").eq(0).css({
            "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
        });
        $(".port_bg li").eq(1).css({
            "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
        });
        $(".port_bg li").eq(2).css({
            "transform": "translateY(" + (0 - (scr / 2)) + "px)"
        });
        $(".port_bg li").eq(3).css({
            "transform": "translateY(" + (0 - (scr / 4)) + "px)"
        });

        // 스크롤 위치가 1630 이상인 경우 추가 스타일 적용 

        // scr이 1630보다 큰지 확인!! 
        // 위의 조건이 참일 경우, scr에서 1630을 빼줌 
        // 이렇게 하는 이유는 위와 같은 #redcarpet 의 구조와 마찬가지로 동작하게 해주기 위함 

        if (scr > 1630) {
            scr -= 1630;
            // redcarpet2의 스크롤에 따른 스타일 변경 
            $("#redcarpet2").css({
                "transform": "translateY(" + (0 - (scr / 2.5)) + "px)"
            });
        }

    })
});

// ( / ) 는 나누기이므로, scr을 2로 나눈 값을 의미함 
// 스크롤 위치에 비례하여 요소의 위치 변경시 사용
// (부드럽게 움직이기위함)
// eq(0) -> 첫번째 요소 선택 / eq(1)은 두번째 요소 