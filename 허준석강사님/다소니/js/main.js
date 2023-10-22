$(function () {



    //슬라이드 내 텍스트 박스 클래스 온
    setTimeout(function () {
        $('.slider li .text0').addClass('on');
        $('.slider li .atext0').addClass('on');
    }, 1000);//1초후 최초 한번만 실행


    var bx = $('.slider').bxSlider({
        auto: true,
        controls: false,
        pager: false,
        mode: 'fade',
        pause: 5000, //실제 슬라이드 속도 - setInterval과 비슷
        autoHover: true,
        onSlideBefore: function () { },
        onSlideAfter: function () {
            var k = bx.getCurrentSlide();
            $('.slider li').find('h2').removeClass('on');
            $('.slider li').find('p').removeClass('on');
            $('.slider li .text' + k).addClass('on');
            $('.slider li .atext' + k).addClass('on');
        }
    });

    //브라우저 높이
    var he;
    $(window).resize(function () {
        he = $(window).height();
        // 현제 브라우저 높이를 he에 저장
        $('section>div').height(he);
        // 저장한 높이 he를 section > div에 각각 넣는다.
    });
    $(window).trigger('resize');
    // 브라우저 시작시 강제로 resize를 실행

    var dTop = $('#floatdiv').offset().top; //250

    //팝업
    // $('#popup').draggable();
    // if ($.cookie('pop') != "no") {
    //     $('#popup').show();
    // }
    // $('.pop_bom1 .btn1').click(function () {
    //     $.cookie('pop', 'no', { expires: 1 });
    //     $('#popup').fadeOut('fast');
    // });

    // $('.pop_bom1 .btn2').click(function () {
    //     $('#popup').fadeOut('fast');
    // });

    // if ($.cookie('popup') == 'none') {
    //     $('#notice_wrap').hide();
    // }

    $('.popup1').draggable();


    if ($.cookie('popup1') == 'none') {
        $('.popup1').hide();
    }


    $('.btn2').click(function () {
        $('.popup1').fadeOut('fast');
    });

    $('.btn1').click(function () {
        $.cookie('popup1', 'none', { expires: 1 });
        $('.popup1').fadeOut('fast');
    });

});
